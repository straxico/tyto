import mongoose from "../Utils/dataBase";

//TYPE
export type UserDocument = mongoose.Document & {
  username: string;
  email: string;
  password: string;
  token: string;
  options: {
    emergencyTrade: {
      changePercent: Number,
      changePriodByMin: Number
    },
    tradeConfig:{
      spaceBetween: Number,
      spaceFromSecondOrder:Number
    },
    allowedSymbolTrade:{simbol:String,buySize:Number,sellSize:Number}[]
  }
};

//SCHEMA
const userSchema = new mongoose.Schema<UserDocument>(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    token: String,
    options: {
      emergencyTrade: {
        changePercent: Number,
        changePriodByMin: Number
      },
      tradeConfig:{
        spaceBetween: Number,
        spaceFromSecondOrder:Number
      },
      allowedSymbolTrade:[{simbol:String,buySize:Number,sellSize:Number}]
    }
  },
  { timestamps: true }
);

//MODEL
export const User = mongoose.model("User", userSchema);
