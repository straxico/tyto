import mongoose from "../Utils/dataBase";

//TYPE
export type exirTradeDocument = mongoose.Document & exirTrades;

//SCHEMA
const exirTradeSchema = new mongoose.Schema<exirTradeDocument>({
  symbol: String,
  size: Number,
  price: Number,
  time: Date
});

//MODEL
export const ExirTrades = mongoose.model("exirtrades", exirTradeSchema);
