import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

// create a auth middleware
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  if (!decoded) {
    return res.status(401).json({ message: "Invalid token" });
  }
  const { id } = decoded as { id: string; email: string };

  res.locals.authorId = id;
  next();
}
