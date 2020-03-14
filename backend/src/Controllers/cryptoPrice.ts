import { CryptoPrice } from "../Models/CryptoPrice";
export const addCryptoPrice = async (CryptoPriceResItem: CryptoPriceResType) => {
  const newPrice = new CryptoPrice(CryptoPriceResItem);

  return await CryptoPrice.findOne(
    {
      symbol: CryptoPriceResItem.symbol,
      price: CryptoPriceResItem.price,
      time: CryptoPriceResItem.time
    },
    (err, existingPrice) => {
      if (err) {
        return console.log("err1");
      }
      if (existingPrice) {
        return console.log("already exists.");
      }
      newPrice.save((err, product) => {
        if (err) {
          console.log(err);
        }
        console.log(product);
      });
    }
  );
};
