import { getExirUserDeleteOrderById } from "../../Api/Exir/exirUserDeleteOrder";
import getExirUserCreateOrder from "../../Api/Exir/exirUserCreateOrder";
import getExirUserTrades from "../../Api/Exir/exirUserTrades";
import { getExirUserAllOrders } from "../../Api/Exir/exirUserOrders";
import getPriceStep from "../../Api/Exir/exirPriceStep";

export const deleteoldOrderList = async (token: string, AllorderList: exirOrderRes[], deletConditionFn: (order: exirOrderRes) => void) => {
    const orderFilteredForDelet = AllorderList.filter(deletConditionFn)

    return Promise.all(orderFilteredForDelet.map(async order => await getExirUserDeleteOrderById({ token, orderId: order.id }))).catch(err => {
        console.log(err);
        return []
    });
}

export const createNewOrders = async ({ token, symbol, size, orderbook, priceStep, buy, sell }: { token: string, symbol: exirSymbols, size: { buySize: number, sellSize: number }, orderbook: any, priceStep: number, buy: boolean, sell: boolean }) => {
    buy && await getExirUserCreateOrder({ token, symbol, size: size.buySize, side: "buy", price: orderbook.bids[0][0] })
    sell && await getExirUserCreateOrder({ token, symbol, size: size.sellSize, side: "sell", price: orderbook.asks[0][0] })
}

export const GetSymbolTradeNeedData = async (token: string, symbol: exirSymbols) => {
    const ccTrades = await getExirUserTrades({ token, symbol })
    const ccOrders = await getExirUserAllOrders({ token, symbol })
    const ccPriceStep = getPriceStep(symbol)
    return { trades: ccTrades, orders: ccOrders, priceStep: ccPriceStep }
}

export const getUserCurrentAutoOrder = (symbolOrders: exirUserAllOrdersRes, symbolItem: allowSymbolType) => {
    const userBuyAutoOrders = symbolOrders.filter(order => order.size == symbolItem.buyOrderSize && order.side == "buy")
    const userSellAutoOrders = symbolOrders.filter(order => order.size == symbolItem.sellorderSize && order.side == "sell")
    const userHaveAutoOrders = userBuyAutoOrders.length || userSellAutoOrders.length
    return { haveOrders: !!userHaveAutoOrders, buyOrders: userBuyAutoOrders, sellOrders: userSellAutoOrders }
}