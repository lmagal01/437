// src/services/uefa-team-svc.ts
import { Schema, model } from "mongoose";
import { UefaTeam } from "../models/uefa-teams";

const UefaTeamSchema = new Schema<UefaTeam>(
  {
    name:    { type: String, required: true, trim: true },
    imgSrc:  { type: String, required: true, trim: true },
    href:    { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true }
  },
  { collection: "uefa_teams" }
);

const UefaTeamModel = model<UefaTeam>("UefaTeam", UefaTeamSchema);

// GET all
function index(): Promise<UefaTeam[]> {
  return UefaTeamModel.find().exec();
}

// GET one by name
function get(name: string): Promise<UefaTeam | null> {
  return UefaTeamModel.findOne({ name }).exec();
}

// POST: create new team
function create(json: UefaTeam): Promise<UefaTeam> {
  const t = new UefaTeamModel(json);
  return t.save();
}

// PUT: update team by name
function update(name: string, team: UefaTeam): Promise<UefaTeam> {
  return UefaTeamModel.findOneAndUpdate({ name }, team, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${name} not updated`;
    return updated as UefaTeam;
  });
}

// DELETE: remove team by name
function remove(name: string): Promise<void> {
  return UefaTeamModel.findOneAndDelete({ name }).then((deleted) => {
    if (!deleted) throw `${name} not deleted`;
  });
}

export default { index, get, create, update, remove };
