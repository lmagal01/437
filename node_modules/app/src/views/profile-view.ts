import { html } from "lit";
import { property, state } from "lit/decorators.js";
import { View } from "@calpoly/mustang";
import { Model } from "../model";
import { Msg } from "../messages";
import { User } from "../models/user";

export class ProfileViewElement extends View<Model, Msg> {
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
    console.log("Attribute changed:", name, "old:", oldValue, "new:", newValue);
    if (
      name === "username" &&
      oldValue !== newValue &&
      newValue
    ) {
      console.log("Dispatching profile/request for:", newValue);
      this.dispatchMessage([
        "profile/request",
        { username: newValue }
      ]);
    }
  }
  

  render() {
    const { username, name, email, favoriteTeam } = this.user || {};

    return html`
      <div class="profile-container">
        <h2>User Profile</h2>
        <a href="/app">← Back to Home</a>

        ${this.user ? html`
          <div class="profile-card">
            <div class="profile-header">
              <div class="avatar">
                ${username?.charAt(0).toUpperCase()}
              </div>
              <h3>${name || username}</h3>
            </div>

            <div class="profile-details">
              <div class="detail-row">
                <strong>Username:</strong>
                <span>${username}</span>
              </div>
              <div class="detail-row">
                <strong>Name:</strong>
                <span>${name || 'Not set'}</span>
              </div>
              <div class="detail-row">
                <strong>Email:</strong>
                <span>${email || 'Not set'}</span>
              </div>
              <div class="detail-row">
                <strong>Favorite Team:</strong>
                <span>${favoriteTeam || 'Not set'}</span>
              </div>
              
            </div>

            <div class="profile-actions">
              <a href="/app/profile/${username}/edit" class="edit-btn">
                Edit Profile
              </a>
            </div>
          </div>
        ` : html`
          <p>Loading profile...</p>
        `}
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}