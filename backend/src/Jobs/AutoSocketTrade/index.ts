import ExirRealTime from "../../Api/Exir/Socket/realtime"
import { GetSymbolTradeNeedData, getUserCurrentAutoOrder, deleteOrderList, getSymbolUserBalance } from "./utils";
import {  deleteCondition, createCondition } from "./tradeCondition";

const AutoTradeJob = async (token: string, symbolItem: allowSymbolType, orderbook: exirOrderBooksResult) => {

    const symbolTradeNeedData = await GetSymbolTradeNeedData(token, symbolItem.symbol)
    const userCurrentAutoOrder =  getUserCurrentAutoOrder(symbolTradeNeedData.orders, symbolItem)
    const userBalance= await getSymbolUserBalance({token,symbol:symbolItem.symbol})
    const filterForDelete = (order: exirOrderRes) => deleteCondition(order, orderbook, symbolTradeNeedData)
    const initCreateOrderdata:initCreateOrderdataType = {
        token,
        orderbook,
        symbolItem,
        symbolTradeNeedData,
        userBalance
    }
    //trade
        const isDeleted = await deleteOrderList(token, userCurrentAutoOrder,filterForDelete)
        const haveBuyOrder = (userCurrentAutoOrder.buyOrders.length-isDeleted.buyDeleted.length)>0
        const haveSellOrder = (userCurrentAutoOrder.sellOrders.length-isDeleted.sellDeleted.length)>0     
           
        if(!haveBuyOrder){            
          await  createCondition('buy',initCreateOrderdata)
        }
        if(!haveSellOrder){
          await  createCondition('sell',initCreateOrderdata) 
        }
        console.log('........................wait for chane...........................');
        

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