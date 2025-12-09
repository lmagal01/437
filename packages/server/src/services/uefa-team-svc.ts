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

// GET ALL teams
function index(): Promise<UefaTeam[]> {
  return UefaTeamModel.find().exec();
}

// GET one team by name
function get(name: string): Promise<UefaTeam | null> {
  return UefaTeamModel.findOne({ name }).exec();
}

export default { index, get };
