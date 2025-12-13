import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "../styles/reset.css.js";

interface SignUpFormData {
  username?: string;
  password?: string;
  confirmPassword?: string;
}

export class SignUpFormElement extends LitElement {
  @state() formData: SignUpFormData = {};
  @property() api: string = "/auth/register"; 
  @property() redirect: string = "/";
  @state() error?: string;

  get canSubmit(): boolean {
    return Boolean(
      this.formData.username &&
      this.formData.password &&
      this.formData.confirmPassword &&
      this.formData.password === this.formData.confirmPassword
    );
  }

  handleChange(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    
    this.formData = { ...this.formData, [name]: value };

    if (this.error === "Passwords do not match") {
      this.error = undefined;
    }
  }

  handleSubmit(submitEvent: SubmitEvent) {
    submitEvent.preventDefault();

    if (this.formData.password !== this.formData.confirmPassword) {
      this.error = "Passwords do not match";
      return;
    }

    if (this.canSubmit) {
      fetch(this.api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.formData)
      })
      .then((res) => {
        if (res.status === 201) return res.json();
        if (res.status === 409) throw "Username already exists";
        throw "Registration failed";
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
        <button ?disabled=${!this.canSubmit} type="submit">Sign Up</button>
        <p class="error">${this.error}</p>
      </form>
    `;
  }

  static styles = [reset.styles, css`
    .error:not(:empty) { 
      color: var(--color-error, red); 
      border: 1px solid red; 
      padding: 10px; 
      margin-top: 1rem;
    }
    button {
      margin-top: 1rem;
    }
  `];
}