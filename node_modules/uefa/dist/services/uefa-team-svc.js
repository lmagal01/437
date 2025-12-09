"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var uefa_team_svc_exports = {};
__export(uefa_team_svc_exports, {
  default: () => uefa_team_svc_default
});
module.exports = __toCommonJS(uefa_team_svc_exports);
var import_mongoose = require("mongoose");
const UefaTeamSchema = new import_mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    imgSrc: { type: String, required: true, trim: true },
    href: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true }
  },
  { collection: "uefa_teams" }
);
const UefaTeamModel = (0, import_mongoose.model)("UefaTeam", UefaTeamSchema);
function index() {
  return UefaTeamModel.find().exec();
}
function get(name) {
  return UefaTeamModel.findOne({ name }).exec();
}
function create(json) {
  const t = new UefaTeamModel(json);
  return t.save();
}
function update(name, team) {
  return UefaTeamModel.findOneAndUpdate({ name }, team, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${name} not updated`;
    return updated;
  });
}
function remove(name) {
  return UefaTeamModel.findOneAndDelete({ name }).then((deleted) => {
    if (!deleted) throw `${name} not deleted`;
  });
}
var uefa_team_svc_default = { index, get, create, update, remove };
