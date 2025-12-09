// src/routes/uefa-teams.ts
import express, { Request, Response } from "express";
import { UefaTeam } from "../models/uefa-teams";
import UefaTeams from "../services/uefa-team-svc";

const router = express.Router();

// GET collection: /api/uefa-teams
router.get("/", (_req: Request, res: Response) => {
  UefaTeams.index()
    .then((list: UefaTeam[]) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

// GET resource: /api/uefa-teams/:name
router.get("/:name", (req: Request, res: Response) => {
  const { name } = req.params;

  UefaTeams.get(name)
    .then((team: UefaTeam | null) => {
      if (team) res.json(team);
      else res.status(404).send(`${name} not found`);
    })
    .catch((err) => res.status(500).send(err));
});

// POST /api/uefa-teams
router.post("/", (req: Request, res: Response) => {
  const newTeam = req.body as UefaTeam;

  UefaTeams.create(newTeam)
    .then((team: UefaTeam) => res.status(201).json(team))
    .catch((err) => res.status(500).send(err));
});
// PUT /api/uefa-teams/:name
router.put("/:name", (req: Request, res: Response) => {
  const { name } = req.params;
  const newTeam = req.body as UefaTeam;

  UefaTeams.update(name, newTeam)
    .then((team: UefaTeam) => res.json(team))
    .catch((_err) => res.status(404).end());
});
// DELETE /api/uefa-teams/:name
router.delete("/:name", (req: Request, res: Response) => {
  const { name } = req.params;

  UefaTeams.remove(name)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;
