import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "../auth/signup-form";


@customElement("sign-up-view")
export class SignUpViewElement extends LitElement {
  render() {
    return html`
    <center>
      <h2>Create Account</h2>
      <main class="card">
        <signup-form></signup-form>
      </main>
      <p>Already have an account?
        <a href="/app/login">Log in here</a>.
      </p>
      </center>
    `;
  }
}
