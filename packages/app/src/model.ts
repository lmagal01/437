import { UefaTeam } from "./models/team";
import { User } from "./models/user"; 

export interface Model {
  teams?: UefaTeam[];
  user?: User;
}

export const init: Model = {};