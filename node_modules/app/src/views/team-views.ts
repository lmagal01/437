import { View } from "@calpoly/mustang";
import { css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { Msg } from "../messages";
import { Model } from "../model";
import { UefaTeam } from "../models/team";

@customElement("teams-view")
export class TeamsViewElement extends View<Model, Msg> {
  constructor() {
    super("uefa:model");
  }

  @state()
  get teams(): UefaTeam[] {
    return this.model.teams ?? [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.dispatchMessage(["teams/request", {}]);
  }

  render() {
    return html`
      <div class="teams_body">
        <h2 style="text-align: center">
          <a href="/app">Home</a>
        </h2>
        <center>
        <img src="/images/UEFAMAP.jpeg" class="center" width="400" height="400">
        <section class="teams-page">
          ${this.teams.length
            ? html`
                <uefa-team-list .teams=${this.teams}></uefa-team-list>
              `
            : html`<p>Loading teams...</p>`}
        </section>
        </center>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}