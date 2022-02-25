/**
 * mcwc-component-name
 *
 * Starting template for a custom web component
 */

(() => {
  const template = document.createElement('template');

  template.innerHTML = `
    <style>
      :host {

      }

      .component-name {

      }
    </style>

    <div class="component-name">

    </div>
  `;

  class MyNewCustomComponent extends HTMLElement {
    // Fires when an instance of the element is created or updated
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    // Fires when an instance was inserted into the document
    connectedCallback() {}

    // Fires when an instance was removed from the document
    disconnectedCallback() {}

    // Fires when an attribute was added, removed, or updated
    attributeChangedCallback(attrName, oldVal, newVal) {}

    // Fires when an element is moved to a new document
    adoptedCallback() {}
  }

  // Register the custom element
  customElements.define('mcwc-component-name', MyNewCustomComponent);
})();
