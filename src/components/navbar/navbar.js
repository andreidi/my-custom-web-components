/**
 * Navbar component
 *
 * A basic navbar component
 */

 (() => {
  const COMPONENT_NAME = 'mcwc-navbar';
  const template = document.createElement('template');
  const links = {
    home: '#',
    about: '#',
    contact: '#',
  };

  template.innerHTML = `
    <style>
      :host {
        --bg-color: #2196f3;
        --text-color: #ffffff;
      }

      .navbar {
        align-content: center;
        align-items: center;
        background-color: var(--bg-color);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 1rem;
      }

      .navbar__brand {
        font-size: 24px;
        color: var(--text-color);
        padding-top: 0.3125rem;
        padding-bottom: 0.3125rem;
        margin-right: 1rem;
        text-decoration: none;
        white-space: nowrap;
      }

      .navbar__links {
        align-items: center;
        display: flex;
        flex-direction: row;
      }

      .navbar__link {
        color: var(--text-color);
        font-size: 17px;
        opacity: 0.8;
        margin-right: 10px;
        padding: 10px;
        text-decoration: none;
      }

      .navbar__link:hover {
        opacity: 1;
      }

      .navbar__link:last-of-type {
        margin-right: 0;
      }
    </style>

    <nav class="navbar">
      <a class="navbar__brand" href="#">Navbar</a>

      <div class="navbar__links">
        <a class="navbar__link" href="${links.home}">Home</a>
        <a class="navbar__link" href="${links.about}">About</a>
        <a class="navbar__link" href="${links.contact}">Contact</a>
      </div>
    </nav>
  `;

  class NavbarComponent extends HTMLElement {
    // Fires when an instance of the element is created or updated
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  // Register the custom element
  customElements.define(COMPONENT_NAME, NavbarComponent);
})();
