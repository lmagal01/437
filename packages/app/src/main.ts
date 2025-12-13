
import { HeaderElement } from "./components/header";
import { StandingsViewElement } from "./views/standings-view";
import { TeamsViewElement } from "./views/team-views"; 
import { LandingViewElement } from "./views/landing-view"; 
import { UefaTeamElement } from "./components/uefa-teams.ts";
import { UefaTeamListElement } from "./components/uefa-team-list";
import { SignUpViewElement } from "./views/sign-up-view"; 
import { LoginViewElement } from "./views/login-view";
import "../src/auth/signup-form.ts";
import {  Auth, History, Switch, Store, define } from "@calpoly/mustang";
import { html } from "lit";
import { Msg } from "./messages";
import { Model, init } from "./model";
import update from "./update";
import "../src/auth/login-form.ts"; 
import { ProfileViewElement } from "./views/profile-view";
import { ProfileEditViewElement } from "./views/profileForm-view"




const routes = [
  {
    path: "/app/signup",
    view: () => html `<sign-up-view></sign-up-view>`   
  },
  {
    path: "/app/teams",
    view: () => html `<teams-view></teams-view>`   
  },
  {
    path: "/app",
    view: () => html `<landing-view></landing-view>`   
  },
  {
  path: "/app/standings",
    view: () => html`<standings-view></standings-view>`
  },
  {
    path: "/",
    redirect: "/app"  
  },
  {
    path: "/app/profile/:username/edit",
    view: (params: any) => html`<profile-edit-view username=${params.username}></profile-edit-view>`
  },
  {
    path: "/app/profile/:username",
    view: (params: any) => html`<profile-view username=${params.username}></profile-view>`
  },
 
  {
    path: "/app/login",
    view: () => html `<login-view></login-view>`   
  },
];

define({
  "mu-auth": Auth.Provider,
  "mu-history": History.Provider,

  "mu-store": class AppStore
extends Store.Provider<Model, Msg>
{
 constructor() {
super(update, init, "uefa:auth"); 
 }
 },

  "mu-switch": class AppSwitch extends Switch.Element {
    constructor() {
      super(routes, "uefa:history", "uefa:auth");
    }
  },
  "uefa-header": HeaderElement,
  "teams-view": TeamsViewElement,
  "landing-view": LandingViewElement,
  "sign-up-view": SignUpViewElement,
  "uefa-team-list": UefaTeamListElement,
  "login-view": LoginViewElement,
  "uefa-team": UefaTeamElement,
  "standings-view": StandingsViewElement,
  "profile-view": ProfileViewElement,
  "profile-edit-view": ProfileEditViewElement
  
});