import express from "express";
import { postLogin, postSignup } from "Controllers/user";
import authenticateJWT from "Utils/autenticate";

const userRoute = (app: express.Application) => {
  app.post("/login", postLogin);
  app.post("/register", authenticateJWT, postSignup);
};
export default userRoute;
