import mongoose from "Utils/dataBase";

//TYPE
export type UserDocument = mongoose.Document & {
  username: string;
  email: string;
  hashedPassword: string;
  role: string;
};

//SCHEMA
const userSchema = new mongoose.Schema<UserDocument>(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    hashedPassword: String,
    role: String,
  },
  { timestamps: true }
);

//MODEL
export const User = mongoose.model<UserDocument>("User", userSchema);
