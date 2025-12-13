import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { UefaTeam } from "../models/team";
import "./uefa-teams";

@customElement("uefa-team-list")
export class UefaTeamListElement extends LitElement {
  @property({ type: Array })
  teams: UefaTeam[] = [];

  render() {
    return html`
      <ul class="teams_body-body">
        ${this.teams.map((team) => html`
          <li>
            <uefa-team .team=${team}></uefa-team>
          </li>
        `)}
      </ul>
    `;
  }

  // Disable Shadow DOM to use global styles
  createRenderRoot() {
    return this;
  }
}