import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { UefaTeam } from "../models/team";

export class UefaTeamElement extends LitElement {
  @property({ attribute: false })
  team?: UefaTeam;

  render() {
    if (!this.team) return html``;
    const { name, imgSrc, href } = this.team;

    return html`
      <a href=${href ?? "#"} class="team-link">
        <img class="team-logo" src="${imgSrc}" alt="${name}" />
        <div class="team-info">
          <span class="team-name">${name}</span>
        </div>
      </a>
    `;
  }

  // Disable Shadow DOM to use global styles
  createRenderRoot() {
    return this;
  }
}