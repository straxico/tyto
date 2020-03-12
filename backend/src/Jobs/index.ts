import ExirTradesJob from "./exirTrades";
import CryptoPriceJob from "./cryptoPrice";
import mongoose from "../Utils/dataBase";
import TgjuPriceJob from "./tgjuPrice";
import StartAutoTrade from "./AutoSocketTrade";
import { EXIR_TOKEN } from "../Utils/secrets"

const allowSymbolTrade: allowSymbolType[] = [
    {
        symbol: 'btc-tmn',
        buyOrderSize: 0.0001,
        sellorderSize: 0.0001
    },
    {
        symbol: 'eth-tmn',
        buyOrderSize: 0.001,
        sellorderSize: 0.001
    },
    {
        symbol: 'bch-tmn',
        buyOrderSize: 0.001,
        sellorderSize: 0.001
    },
    {
        symbol: 'usdt-tmn',
        buyOrderSize: 1,
        sellorderSize: 1
    }
]

const Jobs = async () => {
    await CryptoPriceJob()
    await ExirTradesJob()
    await TgjuPriceJob()
    console.log('connection closed');
    mongoose.disconnect()
}

Jobs()
StartAutoTrade(allowSymbolTrade, EXIR_TOKEN)