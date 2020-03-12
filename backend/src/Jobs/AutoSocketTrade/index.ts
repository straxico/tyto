import ExirRealTime from "../../Api/Exir/Socket/realtime"
import { GetSymbolTradeNeedData, getUserCurrentAutoOrder, deleteoldOrderList, createNewOrders } from "./utils";
import { buyCondition, sellCondition } from "./tradeCondition";


const AutoTradeJob = async (token: string, symbolItem: allowSymbolType, orderbook: exirOrderBooksResult) => {
    const symbolTradeNeedData = await GetSymbolTradeNeedData(token, symbolItem.symbol)
    const userCurrentAutoOrder = getUserCurrentAutoOrder(symbolTradeNeedData.orders, symbolItem)
    const filterForDeleteBuy = (order: exirOrderRes) => buyCondition(order, orderbook, symbolTradeNeedData)
    const filterForDeleteSell = (order: exirOrderRes) => sellCondition(order, orderbook, symbolTradeNeedData)
    const initCreateOrderdata = {
        token,
        orderbook,
        priceStep: symbolTradeNeedData.priceStep,
        symbol: symbolItem.symbol,
        size: { buySize: symbolItem.buyOrderSize, sellSize: symbolItem.sellorderSize }
    }
    //trade
    if (userCurrentAutoOrder.haveOrders) {
        console.log('user have auto order');
        const isDeletedBuy = await deleteoldOrderList(token, userCurrentAutoOrder.buyOrders, filterForDeleteBuy)
        const isDeletedSell = await deleteoldOrderList(token, userCurrentAutoOrder.sellOrders, filterForDeleteSell)
        const isNeedCreateBuyOrder = !!isDeletedBuy.length || !!!userCurrentAutoOrder.buyOrders.length
        const isNeedCreateSellOrder = !!isDeletedSell.length || !!!userCurrentAutoOrder.sellOrders.length

        await createNewOrders({
            ...initCreateOrderdata,
            buy: isNeedCreateBuyOrder,
            sell: isNeedCreateSellOrder
        })
    } else {
        console.log('user dont have auto order');
        await createNewOrders({
            ...initCreateOrderdata,
            buy: true,
            sell: true
        })
    }
}

const StartAutoTrade = (allowSymbolTrade: allowSymbolType[], token: string) => {
    allowSymbolTrade.map((symbolItem) => ExirRealTime({
        symbol: symbolItem.symbol,
        event: 'orderbook',
        fn: (orderbookData: exirOrderBooksRes) => AutoTradeJob(token, symbolItem, orderbookData[symbolItem.symbol])
    })
    )
}
export default StartAutoTrade