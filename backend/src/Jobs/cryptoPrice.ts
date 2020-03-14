import getCoinmarketcap from "../Api/Coinmarketcap/getPrice";
import { addCryptoPrice } from "../Controllers/cryptoPrice";

const CryptoPriceJob = async (job: any, done: () => void) => {
  const res = await getCoinmarketcap();
  await Promise.all(res.map(async item => await addCryptoPrice(item))).catch(err => {
    console.log(err);
  });
  done()
};

export default CryptoPriceJob;
