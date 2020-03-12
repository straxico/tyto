import mongoose from "../Utils/dataBase";

//TYPE
export type UserDocument = mongoose.Document & {
  username: string;
  email: string;
  password: string;
  token: string;
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
        ChangePercent: Number,
        ChangePriodByMin: Number
      }
    }
  },
  { timestamps: true }
);

//MODEL
export const User = mongoose.model("User", userSchema);
