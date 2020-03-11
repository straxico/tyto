import express from "express";
import userRoute from "./user";

const Routes = (app: express.Application) => {
  app.get("/", (req, res) => res.send({ route: "root" }));
  userRoute(app);
};

export default Routes;
