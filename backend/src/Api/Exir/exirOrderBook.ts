import ExirAxios from "./config";
import logger from "../../Utils/logger";

const initVal: exirOrderBooksResult = {
  bids: [],
  asks: [],
  timestamp: "0"
}
const init: exirOrderBooksRes = {
  "btc-tmn": initVal,
  "eth-tmn": initVal,
  "bch-tmn": initVal,
  "usdt-tmn": initVal
}


const getExirOrderBook = async ({ symbol }: { symbol: exirSymbols })=> {
  const config = {
    params: { symbol }
  };
  try {
    const res = await ExirAxios.get("/orderbooks", config);
    return res.data[symbol] as exirOrderBooksResult
  }
  catch (err) {
    logger.info(["API EXIR getExirOrderBook err"]);
    return init[symbol]
  }
};
export default getExirOrderBook;
