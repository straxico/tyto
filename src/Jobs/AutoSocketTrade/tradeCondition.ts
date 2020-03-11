
export const buyCondition = (order: exirOrderRes, orderbook: exirOrderBooksResult, symbolTradeNeedData: symbolTradeNeedDataType, ) => {

    const condition = order.price < orderbook.bids[0][0]
    return condition
}

export const sellCondition = (order: exirOrderRes, orderbook: exirOrderBooksResult, symbolTradeNeedData: symbolTradeNeedDataType) => {
    const condition = order.price > orderbook.asks[0][0]
    return condition
}
