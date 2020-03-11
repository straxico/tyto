
const getPriceStep = (symbol: exirSymbols) => {
    switch (symbol) {
        case "bch-tmn":
            return 10000
            break;
        case "btc-tmn":
            return 50000
            break;
        case "eth-tmn":
            return 5000
            break;
        case "usdt-tmn":
            return 1
            break;
        default:
            return 1
            break;
    }
}
export default getPriceStep