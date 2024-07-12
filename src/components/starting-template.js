/**
 * mcwc-component-name
 *
 * Starting template for a custom web component
 */

(() => {
  const COMPONENT_NAME = 'mcwc-component-name';
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
    // An array containing the names of all attributes for which the element needs change notifications.
    static observedAttributes = [];

    // Fires when an instance of the element is created or updated
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    // Lifecycle callback that runs when the element is added to the document
    connectedCallback() {
      console.log(`<${COMPONENT_NAME}> added to the page.`);
    }

    // Lifecycle callback that runs when the element is removed from the document
    disconnectedCallback() {
      console.log(`<${COMPONENT_NAME}> removed from the page.`);
    }

    // Lifecycle callback that runs when an observed attribute is added, removed, or changed
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`<${COMPONENT_NAME}> Attribute: ${name} changed from ${oldValue} to ${newValue}`);
    }
  }

  // Register the custom element
  customElements.define(COMPONENT_NAME, MyNewCustomComponent);
})();
