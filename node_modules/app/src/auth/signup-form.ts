// packages/app/src/components/signup-form.ts
import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface SignUpFormData {
  username?: string;
  password?: string;
  confirmPassword?: string;
}

@customElement("signup-form")
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

    handleChange(event: Event) {
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
                body: JSON.stringify(this.formData),
            })
                .then((res) => {
                    if (res.status === 201) return res.json();
                    if (res.status === 409) throw new Error("Username already exists");
                    throw new Error("Registration failed");
                })
                .then((json: any) => {
                    const { token } = json;
                    this.dispatchEvent(
                        new CustomEvent("auth:message", {
                            bubbles: true,
                            composed: true,
                            detail: ["auth/signin", { token, redirect: this.redirect }],
                        })
                    );
                })
                .catch((error) => {
                    this.error = error.toString();
                });
        }
    }


    render() {
        return html`
            <form @change=${this.handleChange} @submit=${this.handleSubmit}>
                
                <label>
                    <span>Username:</span>
                    <input name="username" autocomplete="off" .value=${this.formData.username ?? ''} />
                </label>
                <label>
                    <span>Password:</span>
                    <input type="password" name="password" .value=${this.formData.password ?? ''} />
                </label>
                <label>
                    <span>Confirm Password:</span>
                    <input type="password" name="confirmPassword" .value=${this.formData.confirmPassword ?? ''} />
                </label>
                
                <p class="error">${this.error ?? ""}</p>
                <button ?disabled=${!this.canSubmit} type="submit">Sign Up</button>
            </form>
        `;
    }
    createRenderRoot() {
      return this;
  }

    
}