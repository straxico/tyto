import ExirAxios from "./config";

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


const getExirOrderBook = ({ symbol }: { symbol?: exirSymbols }) => {
  const config = {
    params: { symbol }
  };
  const data = ExirAxios.get("/orderbooks", config)
    .then(res => {
      return res.data as exirOrderBooksRes;
    })
    .catch(err => {
      console.log(err);
      return init
    });
  return data;
};
export default getExirOrderBook;
