import express from "express";
import * as userController from "../Controllers/user";

const userRoute = (app: express.Application) => {
  app.post("/login", userController.postLogin);
  app.post("/signup", userController.postSignup);
};
export default userRoute;
