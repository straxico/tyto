type CryptoSymbol = "BTC-USDT" | "ETH-USDT" | "BCH-USDT" | "XRP-USDT" | "USD-TMN" | "TSMTMC-SHAKHES" | "SEKEE-TMN"
type CryptoPriceResType = {
    symbol: CryptoSymbol,
    price: number,
    time: Date
}