import mongoose from "../Utils/dataBase";

//TYPE
export type PlaceDocument = mongoose.Document & {
  name: string;
  description: string;
};

//SCHEMA
const placeSchema = new mongoose.Schema<PlaceDocument>(
  {
    name: { type: String, unique: true },
    description: { type: String },
  },
  { timestamps: true }
);

//MODEL
export const Place = mongoose.model("Place", placeSchema);
