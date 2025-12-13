import { Auth, ThenUpdate } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";
import { UefaTeam } from "./models/team";
import { User } from "./models/user";

export default function update(
  message: Msg,
  model: Model,
  user: Auth.User
): Model | ThenUpdate<Model, Msg> {
  switch (message[0]) {
    case "teams/request": {
      if (model.teams) return model;
      return [
        model,
        requestTeams(user)
          .then((teams) => ["teams/load", { teams }] as Msg)
          .catch((e) => ["teams/error", { error: String(e) }] as Msg),
      ];
    }
    case "teams/load": {
      const { teams } = message[1];
      return { ...model, teams };
    }
    case "teams/error": {
      return model;
    }
    
    // Profile request
    case "profile/request": {
      const { username } = message[1];
      console.log("UPDATE: Received profile/request for:", username);
      if (model.user?.username === username) return model;
      return [
        { ...model, user: { username } as User },
        requestProfile(message[1], user)
          .then((user) => {
            console.log("Profile loaded:", user);
            return ["profile/load", { user }] as Msg;
          })
      ];
    }
    
    // Profile load
    case "profile/load": {
      const { user: profileUser } = message[1];
      return { ...model, user: profileUser };
    }
    
    // Profile save
    case "profile/save": {
      const [, , callbacks] = message;
      return [
        model,
        saveProfile(message[1], user, callbacks || {})
          .then((user) => ["profile/load", { user }] as Msg)
      ];
    }
    
    default:
      const unhandled: never = message[0];
      throw new Error(`Unhandled message "${unhandled}"`);
  }
}

// Fetch teams
function requestTeams(user: Auth.User): Promise<UefaTeam[]> {
  return fetch("/api/teams", {
    headers: Auth.headers(user),
  }).then((res) => {
    if (res.status === 200) return res.json() as Promise<UefaTeam[]>;
    if (res.status === 401) throw new Error("401 Unauthorized");
    throw new Error(`Failed to load teams (${res.status})`);
  });
}

function requestProfile(
  payload: { username: string },
  user: Auth.User
): Promise<User> {
  console.log("Fetching profile for:", payload.username);
  return fetch(`/api/users/${payload.username}`, {
    headers: Auth.headers(user)
  })
    .then((response: Response) => {
      console.log("Profile response status:", response.status);
      if (response.status === 200) return response.json();
      throw new Error("Failed to load profile");
    })
    .then((json: unknown) => {
      console.log("Profile JSON:", json);
      return json as User;
    });
}

function saveProfile(
  msg: { username: string; user: User },
  user: Auth.User,
  callbacks: { onSuccess?: () => void; onFailure?: (err: Error) => void }
): Promise<User> {
  console.log("Saving profile:", msg);
  return fetch(`/api/users/${msg.username}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user)
    },
    body: JSON.stringify(msg.user)
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw new Error(`Failed to save profile for ${msg.username}`);
    })
    .then((json: unknown) => {
      if (json) {
        if (callbacks.onSuccess) callbacks.onSuccess();
        return json as User;
      }
      throw new Error("No JSON in API response");
    })
    .catch((err) => {
      if (callbacks.onFailure) callbacks.onFailure(err);
      throw err;
    });
}