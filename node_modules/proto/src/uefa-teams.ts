import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class UefaTeam extends LitElement {
  @property({ attribute: "img-src" })
  imgSrc?: string;

  @property()
  href?: string;

  @property()
  country?: string;

  override render() {
    return html`
      <article class="team-card">
        <a href=${this.href ?? "#"} class="team-link">
          <img class="team-logo" src=${this.imgSrc ?? ""} />
          <span class="team-name">
            <slot></slot>
          </span>
          <span class="team-country">
            ${this.country}
          </span>
        </a>
      </article>
    `;
  }

  static styles = css`
    .team-card {
      display: inline-block;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      background-color: var(--bg);
      color: var(--text);
      text-align: center;
      margin: 0.5rem;
    }

    .team-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: var(--link-color);
    }

    .team-logo {
      width: 80px;
      height: auto;
      max-width: 100%;
    }

    .team-name {
      font-weight: bold;
    }
  `;
}