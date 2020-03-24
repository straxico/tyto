import { GetSymbolTradeNeedData, getUserCurrentAutoOrder, deleteOrderList, getSymbolUserBalance } from "./utils";
import {  deleteCondition, createCondition } from "./tradeCondition";
import getExirOrderBook from "../../Api/Exir/exirOrderBook";

const MainAutoTrade = async (token: string, symbolItem: allowSymbolType,config:autoTradeConfigType) => {
    const symbolTradeNeedData = await GetSymbolTradeNeedData(token, symbolItem.symbol)
    const userCurrentAutoOrder =  getUserCurrentAutoOrder(symbolTradeNeedData.orders, symbolItem)
    const userBalance= await getSymbolUserBalance({token,symbol:symbolItem.symbol})
    const orderbook=await getExirOrderBook({symbol:symbolItem.symbol})
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
export default MainAutoTrade