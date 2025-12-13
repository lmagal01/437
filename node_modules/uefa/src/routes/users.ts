import express, { Request, Response } from "express";
import { User } from "../models/user";

const router = express.Router();

const users: { [username: string]: User } = {};

router.get("/", (req: Request, res: Response) => {
  res.json(Object.values(users));
});

router.get("/:username", (req: Request, res: Response) => {
  const { username } = req.params;
  const user = users[username];
  
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});

router.post("/", (req: Request, res: Response) => {
  const newUser = req.body as User;
  const { username } = newUser;
  
  if (!username) {
    res.status(400).send("Username is required");
    return;
  }
  
  if (users[username]) {
    res.status(409).send("User already exists");
  } else {
    users[username] = newUser;
    res.status(201).json(newUser);
  }
});

router.put("/:username", (req: Request, res: Response) => {
    const { username } = req.params;
    const updates = req.body as User;
    
    if (users[username]) {
      users[username] = { ...users[username], ...updates, username };
    } else {
      users[username] = { ...updates, username };
    }
    
    res.json(users[username]);
  });

router.delete("/:username", (req: Request, res: Response) => {
  const { username } = req.params;
  
  if (users[username]) {
    delete users[username];
    res.status(204).end();
  } else {
    res.status(404).send("User not found");
  }
});

export default router;