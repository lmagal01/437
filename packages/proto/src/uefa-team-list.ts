import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Auth, Observer } from "@calpoly/mustang";

import "./uefa-teams";

interface TeamData {
  name: string;
  href: string;
  imgSrc: string;
}

export class UefaTeamList extends LitElement {
  @property() src?: string;
  @state() teams: TeamData[] = [];

  createRenderRoot() { return this; }

  private _authObserver = new Observer<Auth.Model>(this, "uefa:auth");
  private _user?: Auth.User;

  connectedCallback() {
    super.connectedCallback();

    this._authObserver.observe((auth: Auth.Model) => {
      this._user = auth.user;
      if (this.src) this.hydrate(this.src);
    });

    if (this.src) this.hydrate(this.src);
  }

  private get authorizationHeaders(): HeadersInit {
    return this._user?.authenticated
      ? { Authorization: `Bearer ${(this._user as Auth.AuthenticatedUser).token}` }
      : {};
  }

  async hydrate(src: string) {
    try {
      const res = await fetch(src, { headers: this.authorizationHeaders });

      if (!res.ok) {
        console.error("Failed to fetch teams:", res.status, res.statusText);
        return;
      }

      this.teams = (await res.json()) as TeamData[];
    } catch (err) {
      console.error("Error fetching teams JSON:", err);
    }
  }

  private renderTeam(team: TeamData) {
    return html`
      <li>
        <svg class="icon">
          <use href="/icons/ball.svg#icon-ball"></use>
        </svg>
        <uefa-team img-src=${team.imgSrc} href=${team.href}>
          ${team.name}
        </uefa-team>
      </li>
    `;
  }

  render() {
    return html`
      <ul class="teams_body-body">
        ${this.teams.map((t) => this.renderTeam(t))}
      </ul>
    `;
  }
}
