import { html } from "lit";
import { property, state } from "lit/decorators.js";
import { View, Form, History } from "@calpoly/mustang";
import { Model } from "../model";
import { Msg } from "../messages";
import { User } from "../models/user";

export class ProfileEditViewElement extends View<Model, Msg> {
  static uses = {
    "mu-form": Form.Element
  };

  @property()
  username?: string;

  @state()
  get user(): User | undefined {
    return this.model.user;
  }

  constructor() {
    super("uefa:model");
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (
      name === "username" &&
      oldValue !== newValue &&
      newValue
    ) {
      this.dispatchMessage([
        "profile/request",
        { username: newValue }
      ]);
    }
  }

  handleSubmit(event: Form.SubmitEvent<User>) {
    console.log("Form submitted:", event.detail);
    this.dispatchMessage([
      "profile/save",
      {
        username: this.username!,
        user: event.detail
      },
      {
        onSuccess: () => {
          console.log("Profile saved successfully!");
          History.dispatch(this, "history/navigate", {
            href: `/app`
          });
        },
        onFailure: (error: Error) => {
          console.error("Failed to save profile:", error);
        }
      }
    ]);
  }

  render() {
    return html`
      <div class="profile-edit-container">
        <h2>Edit Profile</h2>
        <a href="/app">← Back to Home</a>
  
        ${this.user ? html`
        <center>
          <mu-form
            .init=${this.user}
            @mu-form:submit=${(e: Form.SubmitEvent<User>) => this.handleSubmit(e)}>
            
            <label>
              <span>Username</span>
              <input name="username" value="${this.user.username}" disabled />
            </label>
            <label>
              <span>Name</span>
              <input name="name" value="${this.user.name || ''}" />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" value="${this.user.email || ''}" />
            </label>
            <label>
              <span>Favorite Team</span>
              <select name="favoriteTeam">
                <option value="">-- Select a team --</option>
                <option value="Arsenal (ENG)" ?selected=${this.user.favoriteTeam === "Arsenal (ENG)"}>Arsenal</option>
                <option value="Barcelona (ESP)" ?selected=${this.user.favoriteTeam === "Barcelona (ESP)"}>Barcelona</option>
                <option value="Bayern Munich (GER)" ?selected=${this.user.favoriteTeam === "Bayern Munich (GER)"}>Bayern Munich</option>
                <option value="Liverpool (ENG)" ?selected=${this.user.favoriteTeam === "Liverpool (ENG)"}>Liverpool</option>
                <option value="Real Madrid (ESP)" ?selected=${this.user.favoriteTeam === "Real Madrid (ESP)"}>Real Madrid</option>
                <option value="Manchester City (ENG)" ?selected=${this.user.favoriteTeam === "Manchester City (ENG)"}>Manchester City</option>
              </select>
            </label>
           
            <div class="button-group">
              <button type="submit">Save Profile</button>
              <a href="/app" class="cancel-btn">Home</a>
            </div>
          </mu-form>
          </center>
        ` : html`
          <p>Loading...</p>
        `}
      </div>
    `;
  }
  createRenderRoot() {
    return this;
  }
}