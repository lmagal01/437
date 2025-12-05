import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";

interface TeamData {
  name: string;
  href: string;
  imgSrc: string;
}

export class UefaTeamList extends LitElement {
  @property()
  src?: string;

  @state()
  teams: TeamData[] = [];

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.src) {
      this.hydrate(this.src);
    }
  }

  async hydrate(src: string) {
    try {
      const res = await fetch(src);
      if (!res.ok) {
        console.error("Failed to fetch teams:", res.status, res.statusText);
        return;
      }

      const json = (await res.json()) as TeamData[];
      this.teams = json;
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
        <uefa-team
          img-src=${team.imgSrc}
          href=${team.href}
        >
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
