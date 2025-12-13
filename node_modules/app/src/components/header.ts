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
      <a href="/app/login" class="signin-btn">Sign In</a>
    `;
  }

  render() {
    return html`
    
      <header>
      
        <h1>UEFA Teams</h1>
      
        <div class="user-controls">
          <span class="greeting">
            Hello, ${this.userid || "there"}!
          </span>
          ${this.loggedIn
            ? html`
              <a href="/app/profile/${this.userid}" class="profile-link">My Profile</a>
              ${this.renderSignOutButton()}
            `
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
      background-color: var(--header-bg);
      color: white;
      border-bottom: 2px solid #ddd;
      font-family: sans-serif;
    }
    
    h1 {
      margin: 0;
    }
    
    .user-controls {
      display: flex;
      gap: 15px;
      align-items: center;
    }
    
    
  `;
}