
export const buyCondition = (order: exirOrderRes, orderbook: exirOrderBooksResult, symbolTradeNeedData: symbolTradeNeedDataType, ) => {

    const condition = order.price !== orderbook.bids[1][0]
    return condition
}

export const sellCondition = (order: exirOrderRes, orderbook: exirOrderBooksResult, symbolTradeNeedData: symbolTradeNeedDataType) => {
    const condition = order.price !== orderbook.asks[1][0]
    return condition
}
