import { User } from "Models/user";
import { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { JWT_ACCESS_TOKEN } from "../Utils/secrets";

/**
 * POST /login
 * Sign in using email and password.
 */
export const postLogin = async (req: Request, res: Response) => {
  await check("username", "Username is not valid")
    .isLength({ min: 4 })
    .run(req);
  await check("password", "Password cannot be blank")
    .isLength({ min: 1 })
    .run(req);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.send(errors.array());
  }

  User.findOne({ username: req.body.username }).exec((err, user) => {
    if (user) {
      if (req.body.password == user.hashedPassword) {
        const accessToken = jwt.sign(
          { username: req.body.username, role: user.role },
          JWT_ACCESS_TOKEN
        );
        res.json({
          accessToken,
          user,
        });
      } else {
        res.send("password incorrect");
      }
    } else {
      res.send("Username  incorrect");
    }
  });
};

/**
 * POST /signup
 * Create a new account.
 */
export const postSignup = async (req: any, res: any, next: any) => {
  await check("username", "Username is not valid")
    .isLength({ min: 4 })
    .run(req);
  await check("email", "Email is not valid").isEmail().run(req);
  await check("password", "Password must be at least 4 characters long")
    .isLength({ min: 4 })
    .run(req);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.send(errors.array());
  }
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    hashedPassword: req.body.password,
    role: "user",
  });

  User.findOne(
    { email: req.body.email, username: req.body.username },
    (err, existingUser) => {
      if (err) {
        return next(err);
      }
      if (existingUser) {
        return res.send({
          msg: "Account with that email address or username already exists.",
        });
      }
      user.save((err, newUser) => {
        if (err) {
          return next(err);
        }
        return res.send({ newUser });
      });
    }
  );
};
