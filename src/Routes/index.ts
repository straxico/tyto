import express from "express";
import userRoute from "Routes/user";
import placeRoute from "Routes/place";
import s3Route from "./s3";
const Routes = (app: express.Application) => {
  app.get("/", (req, res) => res.send("wellcome to tyto api"));
  s3Route(app);
  userRoute(app);
  placeRoute(app);
};

export default Routes;
