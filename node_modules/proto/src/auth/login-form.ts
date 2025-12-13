import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "../styles/reset.css.js";

interface LoginFormData {
  username?: string;
  password?: string;
}

export class LoginFormElement extends LitElement {
  @state() formData: LoginFormData = {};
  @property() api?: string;
  @property() redirect: string = "/";
  @state() error?: string;

  get canSubmit(): boolean {
    return Boolean(this.api && this.formData.username && this.formData.password);
  }

  handleChange(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    if (name === "username") this.formData = { ...this.formData, username: value };
    if (name === "password") this.formData = { ...this.formData, password: value };
  }

  handleSubmit(submitEvent: SubmitEvent) {
    submitEvent.preventDefault();
    if (this.canSubmit && this.api) {
      fetch(this.api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.formData)
      })
      .then((res) => {
        if (res.status !== 200) throw "Login failed";
        return res.json();
      })
      .then((json: any) => {
        const { token } = json;
        this.dispatchEvent(new CustomEvent('auth:message', {
          bubbles: true, composed: true,
          detail: ['auth/signin', { token, redirect: this.redirect }]
        }));
      })
      .catch((error) => {
        this.error = error.toString();
      });
    }
  }

  render() {
    return html`
      <form @change=${this.handleChange} @submit=${this.handleSubmit}>
        <slot></slot>
        <button ?disabled=${!this.canSubmit} type="submit">Login</button>
        <p class="error">${this.error}</p>
      </form>
    `;
  }

  static styles = [reset.styles, css`
    .error:not(:empty) { color: var(--color-error); border: 1px solid red; padding: 10px; }
  `];
}