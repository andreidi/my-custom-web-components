/**
 * Footer component
 *
 * A basic footer component
 */

(() => {
  const COMPONENT_NAME = 'mcwc-footer';
  const template = document.createElement('template');
  const links = {
    contact: '#',
    terms: '#',
    privacy: '#',
  };

  template.innerHTML = `
    <style>
      :host {
        --bg-color: #e0e0e0;
        --text-color: #838383;
        --link-color: #2196f3;
      }

      .footer {
        align-content: center;
        align-items: center;
        background-color: var(--bg-color);
        color: var(--text-color);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 1rem;
      }

      .footer__links a {
        color: var(--link-color);
        font-size: 0.875em;
        text-decoration: none;
      }
    </style>

    <footer class="footer">
      <div class="footer__info">
        <div>Copyright &copy; Your Website ${new Date().getFullYear()}</div>
      </div>

      <div class="footer__links">
        <a href="${links.privacy}">Privacy Policy</a>
        <span>&bullet;</span>
        <a href="${links.terms}">Terms & Conditions</a>
        <span>&bullet;</span>
        <a href="${links.contact}">Contact</a>
      </div>
    </footer>
  `;

  class FooterComponent extends HTMLElement {
    // Fires when an instance of the element is created or updated
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  // Register the custom element
  customElements.define(COMPONENT_NAME, FooterComponent);
})();
