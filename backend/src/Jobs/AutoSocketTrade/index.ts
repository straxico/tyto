import ExirRealTime from "../../Api/Exir/Socket/realtime"
import { GetSymbolTradeNeedData, getUserCurrentAutoOrder, deleteOrderList, getSymbolUserBalance } from "./utils";
import {  deleteCondition, createCondition } from "./tradeCondition";

const AutoTradeJob = async (token: string, symbolItem: allowSymbolType, orderbook: exirOrderBooksResult,config:autoTradeConfigType) => {

    const symbolTradeNeedData = await GetSymbolTradeNeedData(token, symbolItem.symbol)
    const userCurrentAutoOrder =  getUserCurrentAutoOrder(symbolTradeNeedData.orders, symbolItem)
    const userBalance= await getSymbolUserBalance({token,symbol:symbolItem.symbol})
    const filterForDelete = (order: exirOrderRes) => deleteCondition(order, orderbook, symbolTradeNeedData,config)
    const initCreateOrderdata:initCreateOrderdataType = {
        token,
        orderbook,
        symbolItem,
        symbolTradeNeedData,
        userBalance,
        config
    }
    const isDeleted = await deleteOrderList(token, userCurrentAutoOrder,filterForDelete)
    const haveBuyOrder = (userCurrentAutoOrder.buyOrders.length-isDeleted.buyDeleted.length)>0
    const haveSellOrder = (userCurrentAutoOrder.sellOrders.length-isDeleted.sellDeleted.length)>0     
        
    if(!haveBuyOrder){            
      await  createCondition('buy',initCreateOrderdata)
    }
    if(!haveSellOrder){
      await  createCondition('sell',initCreateOrderdata) 
    }
        

}

const StartAutoTrade = (allowSymbolTrade: allowSymbolType[],config:autoTradeConfigType, token: string) => {
  console.log(`................ auto trading....................`);
  console.log(`................allowSymbolTrade is....................`);
  console.log(allowSymbolTrade);
  console.log(`................config is....................`);
  console.log(config);
  console.log(`................ start....................`);

    allowSymbolTrade.map((symbolItem) => ExirRealTime({
        symbol: symbolItem.symbol,
        event: 'orderbook',
        fn: (orderbookData: exirOrderBooksRes) => AutoTradeJob(token, symbolItem, orderbookData[symbolItem.symbol],config)
    })
    )
}
export default StartAutoTrade