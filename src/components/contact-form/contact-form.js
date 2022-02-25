/**
 * mcwc-contact-form
 *
 * A basic contact form that will send it's data to an API endpoint using Fetch API.
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */

(() => {
  const template = document.createElement('template');

  // this should be updated to your actual API endpoint URL
  const formActionURL = 'https://jsonplaceholder.typicode.com/posts';

  template.innerHTML = `
    <style>
      :host {
        --border-radius: 5px;
        --label-color: #424242;
        --input-color: #212121;
        --input-bg-color: #ffffff;
        --input-bg-disabled-color: #e0e0e0;
        --input-border-color: #e0e0e0;
        --input-border-disabled-color: #bdbdbd;
        --input-border-active-color: #4fc3f7;
        --submit-btn-bg: #4caf50;
        --submit-btn-bg-hover: #388e3c;
        --submit-btn-color: #ffffff;
      }

      .contact-form {
        align-content: center;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
      }

      .contact-form__group {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        width: 100%;
      }

      .contact-form__label {
        color: var(--label-color);
        font-size: 16px;
      }

      .contact-form__input {
        background-color: var(--input-bg-color);
        background-clip: padding-box;
        border: 1px solid var(--input-border-color);
        border-radius: var(--border-radius);
        color: var(--input-color);
        display: block;
        font-family: sans-serif;
        font-size: 16px;
        line-height: 2;
        padding: 0.375rem 0.75rem;
      }

      .contact-form__input:disabled {
        background-color: var(--input-bg-disabled-color);
        border-color: var(--input-border-disabled-color);
      }

      .contact-form__submit {
        background-color: var(--submit-btn-bg);
        border: none;
        border-radius: var(--border-radius);
        cursor: pointer;
        color: var(--submit-btn-color);
        font-size: 18px;
        padding: 12px 20px;
        text-transform: uppercase;
      }

      .contact-form__submit:hover {
        background-color: var(--submit-btn-bg-hover);
      }

      .contact-form__textarea {
        resize: none;
      }
    </style>

    <form class="contact-form" name="contact-form" id="contact-form">
      <div class="contact-form__group">
        <label class="contact-form__label" for="name">Name</label>
        <input class="contact-form__input" type="text" id="name" name="name" placeholder="Enter your name" required>
      </div>

      <div class="contact-form__group">
        <label class="contact-form__label" for="email">Email Address</label>
        <input class="contact-form__input" type="email" id="email" name="email" placeholder="Enter your email address" required>
      </div>

      <div class="contact-form__group">
        <label class="contact-form__label" for="message">Message</label>
        <textarea class="contact-form__input contact-form__textarea" id="message" name="message" placeholder="Enter your message" style="height:200px" required></textarea>
      </div>

      <div class="contact-form__group">
        <button class="contact-form__submit" type="submit">Submit</button>
      </div>
    </form>
  `;

  class ContactFormComponent extends HTMLElement {
    // Fires when an instance of the element is created or updated
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      this.disabled = false;
      this.form = this.shadowRoot.getElementById('contact-form');
    }

    // Fires when an instance was inserted into the document
    connectedCallback() {
      this._init();
    }

    _init() {
      this.form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (this.disabled) {
          return;
        }

        const formData = new FormData(this.form);
        const serializedData = this._serialize(formData);
        // Note: if using 'Content-Type': 'application/x-www-form-urlencoded',
        // you should use the following instead
        // const serializedData = new URLSearchParams(formData).toString();

        this._submit(serializedData);
      });
    }

    // Serialize the form data
    _serialize(formData) {
      const serializedData = {};

      for (let formEntry of formData.entries()) {
        serializedData[formEntry[0]] = formEntry[1];
      }

      console.log(serializedData);

      return JSON.stringify(serializedData);
    }

    // Submit the form using window.fetch
    _submit(body) {
      fetch(formActionURL, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/json',
        },
        body,
      })
        .then((response) => {
          if (!response.ok) {
            return new Error('Network response was not ok');
          }

          this._disable();
          alert('Form submission successful!');
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // Disable the form inputs
    _disable() {
      this.disabled = true;
      for (let element of this.form.elements) {
        element.setAttribute('disabled', '');
      }
    }
  }

  // Register the custom element
  customElements.define('mcwc-contact-form', ContactFormComponent);
})();
