import { addCryptoPrice } from "../Controllers/cryptoPrice";
import getTgju from "../Api/Tgju/getTgjuData";

const TgjuPriceJob = async () => {
  const res = await getTgju();
  return Promise.all(res.map(async item => await addCryptoPrice(item))).catch(err => {
    console.log(err);
  });;
};

export default TgjuPriceJob;
