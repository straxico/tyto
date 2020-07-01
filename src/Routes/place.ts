import express from "express";
import * as placeController from "../Controllers/place";

const placeRoute = (app: express.Application) => {
  app.post("/place/new", placeController.placeNew);
  app.get("/place/all", placeController.placeGetAll);
  app.delete("/place/:id", placeController.placeDelete);
};
export default placeRoute;
