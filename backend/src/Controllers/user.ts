import { User } from "../Models/user";
import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

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
  return res.send({ msg: "ready for login" });
};

/**
 * POST /signup
 * Create a new local account.
 */
export const postSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await check("username", "Username is not valid")
    .isLength({ min: 4 })
    .run(req);
  await check("email", "Email is not valid")
    .isEmail()
    .run(req);
  await check("password", "Password must be at least 4 characters long")
    .isLength({ min: 4 })
    .run(req);
  await check("token", "Password must be at least 4 characters long")
    .isLength({ min: 4 })
    .run(req);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.send(errors.array());
  }

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    token: req.body.token
  });

  User.find(
    { email: req.body.email, username: req.body.username },
    (err, existingUser) => {
      if (err) {
        return next(err);
      }
      if (existingUser.length) {
        return res.send({
          msg: "Account with that email address or username already exists."
        });
      }
      user.save(err => {
        if (err) {
          return next(err);
        }
        return res.send({ user });
      });
    }
  );
};
