import { addExirTrades } from "../Controllers/exirTrades";
import getExirTrade from "../Api/Exir/exirTrades";
const preExirTrade = (exirTradesRes: exirTradesRes) => {
  const result: exirTrades[] = [];
  Object.keys(exirTradesRes).map((key: exirSymbols) => {
    exirTradesRes[key].map(item => {
      result.push({
        price: item.price,
        size: item.size,
        time: item.timestamp,
        symbol: key
      });
    });
  });
  return result;
};

const ExirTradesJob = async () => {
  const res = await getExirTrade({})
  const exirTradesRes = preExirTrade(res as exirTradesRes);
  return Promise.all(exirTradesRes.map(async item => await addExirTrades(item))).catch(err => {
    console.log(err);
  });
};

export default ExirTradesJob;
