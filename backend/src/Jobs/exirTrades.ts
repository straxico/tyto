import { addExirTrades } from "../Controllers/exirTrades";
import getExirTrade from "../Api/Exir/exirTrades";
const preExirTrade = (exirTradesRes: exirTradesRes) => {
  const result: exirTrades[] = [];
  Object.keys(exirTradesRes).map((key: exirSymbols) => {
    exirTradesRes[key].forEach(item => {
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

const ExirTradesJob = async (job: any, done: () => void) => {
  const res = await getExirTrade({})
  const exirTradesRes = preExirTrade(res as exirTradesRes);
  await Promise.all(exirTradesRes.map(async item => await addExirTrades(item))).catch(err => {
    console.log(err);
  });
  done()
};

export default ExirTradesJob;
