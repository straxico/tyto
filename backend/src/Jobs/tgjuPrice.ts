import { addCryptoPrice } from "../Controllers/cryptoPrice";
import getTgju from "../Api/Tgju/getTgjuData";

const TgjuPriceJob = async (job: any, done: () => void) => {
  const res = await getTgju();
  await Promise.all(res.map(async item => await addCryptoPrice(item))).catch(err => {
    console.log(err);
  });
  done()
};

export default TgjuPriceJob;
