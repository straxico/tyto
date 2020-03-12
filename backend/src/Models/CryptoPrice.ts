import mongoose from "../Utils/dataBase";

//TYPE
export type CryptoPriceType = mongoose.Document & CryptoPriceResType;

//SCHEMA
const CryptoPriceSchema = new mongoose.Schema<CryptoPriceType>({
  symbol: String,
  price: Number,
  time: Date
});

//MODEL
export const CryptoPrice = mongoose.model("CryptoPrice", CryptoPriceSchema);
