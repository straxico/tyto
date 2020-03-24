import MainAutoTrade from "./main"
import { EXIR_TOKEN } from "../../Utils/secrets"

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

const AutoTradeJob = async (job: any, done: () => void) => {

  await Promise.all(allowSymbolTrade.map(async symbolItem =>
      await MainAutoTrade(EXIR_TOKEN, symbolItem,autoTradeConfig)
)).catch(err => console.log(err));

  done()
};

export default AutoTradeJob;



