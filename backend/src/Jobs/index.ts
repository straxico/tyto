import StartAutoTrade from "./AutoSocketTrade";
import { EXIR_TOKEN } from "../Utils/secrets"

const allowSymbolTrade: allowSymbolType[] = [
    {
        symbol: 'btc-tmn',
        buyOrderSize: 0.01,
        sellorderSize: 0.003
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
const autoTradeConfig:autoTradeConfigType={
    SPACE_BETWEEN:0.8, //%
    SPACE_FROM_TWO:3 //%
}

StartAutoTrade(allowSymbolTrade,autoTradeConfig, EXIR_TOKEN)

