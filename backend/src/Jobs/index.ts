import StartAutoTrade from "./AutoSocketTrade";
import { EXIR_TOKEN } from "../Utils/secrets"

const allowSymbolTrade: allowSymbolType[] = [
    {
        symbol: 'btc-tmn',
        buyOrderSize: 0.01,
        sellorderSize: 0.01
    }
]
const autoTradeConfig:autoTradeConfigType={
    SPACE_BETWEEN:0.5, //%
    SPACE_FROM_TWO:2 //%
}

StartAutoTrade(allowSymbolTrade,autoTradeConfig, EXIR_TOKEN)

