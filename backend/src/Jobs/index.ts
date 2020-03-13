import ExirTradesJob from "./exirTrades";
import CryptoPriceJob from "./cryptoPrice";
import mongoose from "../Utils/dataBase";
import TgjuPriceJob from "./tgjuPrice";
import StartAutoTrade from "./AutoSocketTrade";
import { EXIR_TOKEN } from "../Utils/secrets"

const allowSymbolTrade: allowSymbolType[] = [
    {
        symbol: 'btc-tmn',
        buyOrderSize: 0.001,
        sellorderSize: 0.001
    },
    {
        symbol: 'eth-tmn',
        buyOrderSize: 0.01,
        sellorderSize: 0.01
    },
    {
        symbol: 'bch-tmn',
        buyOrderSize: 0.01,
        sellorderSize: 0.01
    },
    {
        symbol: 'usdt-tmn',
        buyOrderSize: 10,
        sellorderSize: 10
    }
]

const Jobs = async () => {
    console.log('its ok');
    await CryptoPriceJob()
    await ExirTradesJob()
    await TgjuPriceJob()
    console.log('connection closed');
}
// mongoose.disconnect()

//Jobs()
StartAutoTrade(allowSymbolTrade, EXIR_TOKEN)
export default Jobs