import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { History, Events } from "@calpoly/mustang";interface LoginFormData {
  username?: string;
  password?: string;
}

@customElement("login-form")
export class LoginFormElement extends LitElement {
  @state() formData: LoginFormData = {};
  @property() api: string = "/auth/login";
  @property() redirect: string = "/app";
  @state() error?: string;

  get canSubmit(): boolean {
    return Boolean(this.formData.username && this.formData.password);
  }

  handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    this.formData = { ...this.formData, [name]: value };
  }

  handleSubmit(submitEvent: SubmitEvent) {
    submitEvent.preventDefault();
    console.log("Form submitted");
  
    if (!this.canSubmit) {
      console.log("Form cannot submit - validation failed");
      return;
    }
  
    console.log("Can submit - fetching...");
  
    fetch(this.api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.formData),
    })
      .then((res) => {
        console.log("Response received:", res.status);
        if (res.status === 200) return res.json();
        throw new Error("Login failed");
      })
      .then((json: any) => {
        console.log("🔵 JSON parsed:", json);
        console.log("🔵 Token:", json.token);
        
        // Dispatch auth message directly
        this.dispatchEvent(
          new CustomEvent("auth:message", {
            bubbles: true,
            composed: true,
            detail: ["auth/signin", { token: json.token, redirect: this.redirect }]
          })
        );
        
        console.log("Auth message dispatched");
      })
      .catch((error) => {
        console.error("Login error:", error);
        this.error = error.toString();
      });
  }
  render() {
    return html`
      <form @input=${this.handleChange} @submit=${this.handleSubmit}>
        <slot></slot>
        <button ?disabled=${!this.canSubmit} type="submit">Login</button>
        <p class="error">${this.error ?? ""}</p>
      </form>
    `;
  }

  static styles = css`
    .error:not(:empty) {
      color: red;
      border: 1px solid red;
      padding: 10px;
    }
  `;
}