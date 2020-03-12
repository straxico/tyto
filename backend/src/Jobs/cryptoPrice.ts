import getCoinmarketcap from "../Api/Coinmarketcap/getPrice";
import { addCryptoPrice } from "../Controllers/cryptoPrice";

const CryptoPriceJob = async () => {
  const res = await getCoinmarketcap();
  return Promise.all(res.map(async item => await addCryptoPrice(item))).catch(err => {
    console.log(err);
  });;
};

export default CryptoPriceJob;
