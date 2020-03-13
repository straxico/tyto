import getExirUserCreateOrder from "../../Api/Exir/exirUserCreateOrder"
import logger from "../../Utils/logger"

const SPACE_BETWEEN=1 //%
const SPACE_FROM_TWO=3 //%
export const deleteCondition = (order: exirOrderRes, orderbook: exirOrderBooksResult, symbolTradeNeedData: symbolTradeNeedDataType, ) => {
    const spaceBetween= ((orderbook.asks[0][0]-orderbook.bids[0][0])/orderbook.asks[0][0])*100
    const bigSpaceBetween= spaceBetween >SPACE_BETWEEN

    if(order.side=='buy'){
        const isTopBuy = order.price >= orderbook.bids[1][0]
        const isNotVerySpaceBuy = order.price < orderbook.bids[1][0]*(1+SPACE_FROM_TWO/100)

        const isDelete = !bigSpaceBetween || !isTopBuy || !isNotVerySpaceBuy
        isDelete && logger.info(["delete buy for",{bigSpaceBetween,isTopBuy,isNotVerySpaceBuy}]);
        return isDelete
    }else{
        const isTopSell=order.price <= orderbook.asks[1][0]
        const isNotVerySpaceSell = order.price > orderbook.asks[1][0]*(1-SPACE_FROM_TWO/100)
        const isDelete =!bigSpaceBetween || !isTopSell || !isNotVerySpaceSell
        isDelete && logger.info(["delete sell for",{bigSpaceBetween,isTopSell,isNotVerySpaceSell}]);

        return isDelete
    }
    

}

export const createCondition = async (side: 'buy'|'sell', init:initCreateOrderdataType ) => {
    const spaceBetween= ((init.orderbook.asks[0][0]-init.orderbook.bids[0][0])/init.orderbook.asks[0][0])*100
    const niceBuyPrice= init.orderbook.bids[1][0]+init.symbolTradeNeedData.priceStep
    const niceSellPrice= init.orderbook.asks[1][0]-init.symbolTradeNeedData.priceStep
    const availableFiat=init.userBalance.fiat.available
    const needFiat=niceBuyPrice*init.symbolItem.buyOrderSize
    if(spaceBetween>SPACE_BETWEEN){
        if(side=='buy'){
            if(availableFiat>=needFiat){
                return await getExirUserCreateOrder({token:init.token,symbol:init.symbolItem.symbol, size:init.symbolItem.buyOrderSize, side, price: niceBuyPrice }) 
            }else{
                logger.info(["buy create err",`fiat userBalance is ${availableFiat} but need ${needFiat}`]);
            }
        }else{
            if(init.userBalance.available>init.symbolItem.sellorderSize){
                return await getExirUserCreateOrder({token:init.token,symbol:init.symbolItem.symbol, size:init.symbolItem.sellorderSize, side, price: niceSellPrice }) 
            }else{
                logger.info(["sell create err",`userBalance is ${init.userBalance.available} but need ${init.symbolItem.sellorderSize}`]);
            }
        }
    }else{
        logger.info(["create err",`spaceBetween set at ${SPACE_BETWEEN} but now is ${spaceBetween}`]);
    }
    
}

