import express from "express";
import userRoute from "./user";
import placeRoute from "./place"
const Routes = (app: express.Application) => {
  app.get("/", (req, res) => res.send({ route: "root" }));
  userRoute(app);
  placeRoute(app)
};

export default Routes;