import { getExirUserDeleteOrderById } from "../../Api/Exir/exirUserDeleteOrder";
import getExirUserTrades from "../../Api/Exir/exirUserTrades";
import { getExirUserAllOrders } from "../../Api/Exir/exirUserOrders";
import getPriceStep from "../../Api/Exir/exirPriceStep";
import getExirBalance from "../../Api/Exir/exirBalance";

export const deleteOrderList = async (token: string, AllorderList:getUserCurrentAutoOrder , deletConditionFn: (order: exirOrderRes) => void) => {
    const buyorderFilteredForDelete =AllorderList.buyOrders.filter(deletConditionFn)
    const sellorderFilteredForDelete =AllorderList.sellOrders.filter(deletConditionFn)

    const deletfn= (orderlist:exirOrderRes[])=> Promise.all(orderlist.map(async order => await getExirUserDeleteOrderById({ token, orderId: order.id }))).catch(err => {
        console.log(err);
        return []
    });

return   {forDeletBuy:buyorderFilteredForDelete, buyDeleted: await deletfn(buyorderFilteredForDelete),forDeletSell:sellorderFilteredForDelete ,sellDeleted: await deletfn(sellorderFilteredForDelete)}

}


export const GetSymbolTradeNeedData = async (token: string, symbol: exirSymbols) => {
    const ccTrades = await getExirUserTrades({ token, symbol })
    const ccOrders = await getExirUserAllOrders({ token, symbol })
    const ccPriceStep = getPriceStep(symbol)
    return { trades: ccTrades, orders: ccOrders, priceStep: ccPriceStep }
}


export const getUserCurrentAutoOrder = (symbolOrders: exirUserAllOrdersRes, symbolItem: allowSymbolType):getUserCurrentAutoOrder => {
    const userBuyAutoOrders = symbolOrders.filter(order => order.size == symbolItem.buyOrderSize && order.side == "buy")
    const userSellAutoOrders = symbolOrders.filter(order => order.size == symbolItem.sellorderSize && order.side == "sell")
    return {buyOrders: userBuyAutoOrders, sellOrders: userSellAutoOrders }
}

export const getSymbolUserBalance=async ({symbol,token}:{symbol:exirSymbols,token:string}):Promise<getUserBalanceType>=>{
    const userBalance= await getExirBalance({token})
    const fiat={pending:userBalance.fiat_pending,balance:userBalance.fiat_balance,available:userBalance.fiat_available}
    switch (symbol) {
        case 'bch-tmn':
            return {pending:userBalance.bch_pending,balance:userBalance.bch_balance,available:userBalance.bch_available,fiat}
        case 'btc-tmn':
            return {pending:userBalance.btc_pending,balance:userBalance.btc_balance,available:userBalance.btc_available,fiat}
        case 'eth-tmn':
            return {pending:userBalance.eth_pending,balance:userBalance.eth_balance,available:userBalance.eth_available,fiat}
        case 'usdt-tmn':
            return {pending:userBalance.usdt_pending,balance:userBalance.usdt_balance,available:userBalance.usdt_available,fiat}
        default:
            break;
    }
}