import { ExirTrades } from "../Models/exirTrades";

export const addExirTrades = async (exirTradesRes: exirTrades) => {
  const newTrade = new ExirTrades(exirTradesRes);

  return ExirTrades.findOne(
    {
      price: exirTradesRes.price,
      size: exirTradesRes.size,
      time: exirTradesRes.time
    },
    (err, existingTrade) => {
      if (err) {
        return console.log("err1");
      }
      if (existingTrade) {
        return console.log("already exists.");
      }
      newTrade.save((err, product) => {
        if (err) {
          console.log(err);
        }
        console.log(product);
      });
    }
  );
};
