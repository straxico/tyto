import express from "express";
import userRoute from "Routes/user";
import placeRoute from "Routes/place";
const Routes = (app: express.Application) => {
  app.get("/", (req, res) => res.send("wellcome to tyto api"));
  userRoute(app);
  placeRoute(app);
};

export default Routes;
