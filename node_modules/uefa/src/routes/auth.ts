import dotenv from "dotenv";
dotenv.config();

import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import credentials from "../services/credential-svc";

interface AuthenticatedRequest extends Request {
  user?: { username: string }; 
}

const router = express.Router();
const JWT_SECRET: string = process.env.JWT_SECRET || "MY_UEFA_SECRET_KEY"; 



function generateAccessToken(username: string): Promise<String> {
  return new Promise((resolve, reject) => {
 
    jwt.sign(
      { username: username },
      JWT_SECRET,
      { expiresIn: "1d" },
      (error, token) => {
        if (error) reject(error);
        else resolve(token as string);
      }
    );
  });
}

router.post("/register", (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).send("Bad request: Invalid input data.");
  } else {
    credentials.create(username, password)
      .then((creds) => generateAccessToken(creds.username))
      .then((token) => res.status(201).send({ token: token }))
      .catch((err) => res.status(409).send({ error: err.message }));
  }
});

router.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).send("Bad request: Invalid input data.");
  } else {
    credentials.verify(username, password)
      .then((goodUser: string) => generateAccessToken(goodUser))
      .then((token) => res.status(200).send({ token: token }))
      .catch((error) => res.status(401).send("Unauthorized"));
  }
});

export function authenticateUser(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).end();
  }
  

  jwt.verify(token, JWT_SECRET, (error, decoded) => {
    if (error || !decoded) {
      return res.status(401).end();
    }
    
    const payload = decoded as jwt.JwtPayload & { username: string };
    
    
    (req as AuthenticatedRequest).user = { username: payload.username };
    
    next();
  });
}

export default router;