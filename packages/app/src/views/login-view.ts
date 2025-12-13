import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "../auth/login-form";

@customElement("login-view")
export class LoginViewElement extends LitElement {
  render() {
    return html`
    <center>
      <h2>Log In</h2>
      <main class="card">
        <login-form redirect="/app/teams">
          <label>
            <span>Username:</span>
            <input name="username" autocomplete="off" />
          </label>
          <label>
            <span>Password:</span>
            <input type="password" name="password" />
          </label>
        </login-form>
      </main>
      <p>No account? <a href="/app/signup">Sign up</a>.</p>
      </center>
    `;
  }
}
