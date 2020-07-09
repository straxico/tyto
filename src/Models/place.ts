import mongoose from "Utils/dataBase";

//TYPE
export type PlaceDocument = mongoose.Document & {
  name: string;
  description: string;
  placeId: string;
};

//SCHEMA
const placeSchema = new mongoose.Schema<PlaceDocument>(
  {
    name: { type: String },
    placeId: { type: String, unique: true },
    description: { type: String },
  },
  { timestamps: true }
);

//MODEL
export const Place = mongoose.model<PlaceDocument>("Place", placeSchema);
