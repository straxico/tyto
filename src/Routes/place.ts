import express from "express";
import * as placeController from "Controllers/place";
import authenticateJWT from "Utils/autenticate";

const placeRoute = (app: express.Application) => {
  app.post("/place", authenticateJWT, placeController.placeNew);
  app.delete("/place", authenticateJWT, placeController.placeDelete);
  app.put("/place", authenticateJWT, placeController.placeUpdate);
  app.get("/place/all", placeController.placeGetAll);
  app.get("/place/:id", placeController.placeGetOne);
};
export default placeRoute;
