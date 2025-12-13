import { css, html, LitElement } from "lit";
import { state } from "lit/decorators.js";
import { Auth, Observer, Events } from "@calpoly/mustang";

export class HeaderElement extends LitElement {

  _authObserver = new Observer<Auth.Model>(this, "uefa:auth");

  @state()
  loggedIn = false;

  @state()
  userid?: string;

  connectedCallback() {
    super.connectedCallback();

    this._authObserver.observe((auth: Auth.Model) => {
      const { user } = auth;

      if (user && user.authenticated) {
        this.loggedIn = true;
        this.userid = user.username;
      } else {
        this.loggedIn = false;
        this.userid = undefined;
      }
    });
  }

  renderSignOutButton() {
    return html`
      <button
        class="signout-btn"
        @click=${(e: Event) => {
          Events.relay(e, "auth:message", ["auth/signout"]);
        }}
      >
        Sign Out
      </button>
    `;
  }

  renderSignInButton() {
    return html`
      <a href="/login.html" class="signin-btn">Sign In</a>
    `;
  }

  render() {
    return html`
      <header>
        <h1>UEFA Teams</h1>
        <div class="user-controls">
          <span class="greeting">
            Hello, ${this.userid || "fan"}!
          </span>
          ${this.loggedIn
            ? this.renderSignOutButton()
            : this.renderSignInButton()}
        </div>
      </header>
    `;
  }

  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: #f5f5f5;
      border-bottom: 2px solid #ddd;
      font-family: sans-serif;
    }
    .user-controls {
      display: flex;
      gap: 15px;
      align-items: center;
    }
    .signout-btn {
      background: #e74c3c;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 4px;
    }
    .signin-btn {
      color: #3498db;
      text-decoration: none;
      font-weight: bold;
    }
  `;
}