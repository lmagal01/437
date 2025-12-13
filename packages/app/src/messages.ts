import { UefaTeam } from "./models/team";
import { User } from "./models/user";  

export type Msg =
  | ["teams/request", {}]
  | ["teams/load", { teams: UefaTeam[] }]
  | ["teams/error", { error: string }]
  | ["profile/request", { username: string }]
  | ["profile/load", { user: User }]
  | ["profile/save", {
      username: string;
      user: User;
    }, {
      onSuccess?: () => void;
      onFailure?: (err: Error) => void;
    }];