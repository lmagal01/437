import { html, css } from "lit";
import { state } from "lit/decorators.js";
import { View } from "@calpoly/mustang";
import { Model } from "../model";
import { Msg } from "../messages";

export class LandingViewElement extends View<Model, Msg> {
  @state()
  darkMode = false;

  constructor() {
    super("uefa:model");
  }

  connectedCallback() {
    super.connectedCallback();
    // Check if dark mode was previously enabled
    this.darkMode = localStorage.getItem("darkMode") === "enabled";
  }

  toggleDarkMode(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.darkMode = checkbox.checked;
    
    if (this.darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }

  render() {
    return html`
    <center>
      <div class="center">
        <header>
          <img src="/images/Champions.png" class="center">
        </header>
        
        <label id="darkmode-label">
          <input 
            type="checkbox" 
            autocomplete="off"
            .checked=${this.darkMode}
            @change=${this.toggleDarkMode}
          />
          Dark Mode
        </label>
        
        <a href="/app/teams">
        <h2>Teams</h2>
      </a>
      <a href="/app/standings">
        <h2>Standings</h2>
      </a>
        <img src="/images/UEFAMAP.jpeg" width="400" height="400">
      </div>
      </center>
    `;
  }

  createRenderRoot() {
    return this;
  }
}