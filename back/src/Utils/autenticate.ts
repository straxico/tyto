import { JWT_ACCESS_TOKEN } from "Utils/secrets";
import jwt from "jsonwebtoken";

const authenticateJWT = (req: any, res: any, next: any) => {
  const authHeader = req?.headers?.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, JWT_ACCESS_TOKEN, (err: any, user: any) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  }
  next();
};
export default authenticateJWT;
