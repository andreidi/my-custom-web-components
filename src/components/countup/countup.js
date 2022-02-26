/**
 * mcwc-countup
 *
 * A countup component that counts from zero up to an end number when it enters the viewport.
 *
 * Supported attributes:
 * end: number (required)
 * duration: number (defaults to 2 seconds)
 * easing: string (defaults to 'easeInCubic'; see available values in EASING_FUNCTIONS).
 * color: string (defaults to '#212121'; must be a valid HEX color)
 */

(() => {
  const template = document.createElement('template');
  const EASING_FUNCTIONS = {
    // no easing, no acceleration
    linear: (t) => t,
    // accelerating from zero velocity
    easeInQuad: (t) => t * t,
    // decelerating to zero velocity
    easeOutQuad: (t) => t * (2 - t),
    // acceleration until halfway, then deceleration
    easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    // accelerating from zero velocity
    easeInCubic: (t) => t * t * t,
    // decelerating to zero velocity
    easeOutCubic: (t) => --t * t * t + 1,
    // acceleration until halfway, then deceleration
    easeInOutCubic: (t) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    // accelerating from zero velocity
    easeInQuart: (t) => t * t * t * t,
    // decelerating to zero velocity
    easeOutQuart: (t) => 1 - --t * t * t * t,
    // acceleration until halfway, then deceleration
    easeInOutQuart: (t) =>
      t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
    // accelerating from zero velocity
    easeInQuint: (t) => t * t * t * t * t,
    // decelerating to zero velocity
    easeOutQuint: (t) => 1 + --t * t * t * t * t,
    // acceleration until halfway, then deceleration
    easeInOutQuint: (t) =>
      t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
  };

  template.innerHTML = `
    <style>
      .countup {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 3.5rem;
      }
    </style>

    <span class="countup" id="output">0</span>
  `;

  class CountupComponent extends HTMLElement {
    // Fires when an instance of the element is created or updated
    constructor() {
      super();

      if (!this.hasAttribute('end') || !this.attributes.end.value) {
        throw new Error(
          `A value for 'end' attribute must be passed to countup component`
        );
      }

      this.endValue = this._parseNumericValue(this.attributes.end.value, 'end');
      this.duration = 2000; // 2 seconds in ms
      this.easingFunction = EASING_FUNCTIONS.easeInCubic;
      this.stopped = false;
      this.currentCount = 0;

      if (this.hasAttribute('duration') && this.attributes.duration.value) {
        const parsedDuration = this._parseNumericValue(
          this.attributes.duration.value,
          'duration'
        );

        if (!parsedDuration || parsedDuration < 0) {
          throw new Error(
            `The value for 'duration' attribute is invalid (${value})`
          );
        }

        this.duration = parsedDuration * 1000;
      }

      if (
        this.hasAttribute('easing') &&
        this.attributes.easing.value &&
        this._validateEasingFunctionName(this.attributes.easing.value)
      ) {
        this.easingFunction = EASING_FUNCTIONS[this.attributes.easing.value];
      }

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      let color = '#212121';

      if (
        this.hasAttribute('color') &&
        this.attributes.color.value &&
        this._validateHexColor(this.attributes.color.value)
      ) {
        color = this.attributes.color.value;
      }

      this.output = this.shadowRoot.getElementById('output');
      this.output.style.color = color;
    }

    // Fires when an instance was inserted into the document
    connectedCallback() {
      this._initIntersectionObserver();
    }

    // Fires when an instance was removed from the document
    disconnectedCallback() {
      clearInterval(this.counter);
      this.observer.disconnect();
    }

    _animate() {
      const frameDuration = 100 / 6;
      const totalFrames = Math.round(this.duration / frameDuration);

      let frame = 0;

      this.counter = setInterval(() => {
        frame++;

        const progress = this.easingFunction(frame / totalFrames);
        const currentCount = Math.round(this.endValue * progress);

        if (this.currentCount !== currentCount) {
          this.output.innerText = currentCount;
        }

        this.currentCount = currentCount;

        if (frame === totalFrames || currentCount >= this.endValue) {
          this.stopped = true;
          clearInterval(this.counter);
        }
      }, frameDuration);
    }

    _initIntersectionObserver() {
      const callback = (entries) => {
        if (this.stopped) {
          return;
        }

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this._animate();
          } else {
            clearInterval(this.counter);
          }
        });
      };

      this.observer = new IntersectionObserver(callback);

      this.observer.observe(this);
    }

    _parseNumericValue(value, name) {
      const parsed = Number(value);

      if (typeof parsed !== 'number' || isNaN(parsed)) {
        throw new Error(`The value for '${name}' attribute must be a number`);
      }

      return parsed;
    }

    _validateEasingFunctionName(name) {
      if (!EASING_FUNCTIONS.hasOwnProperty(name)) {
        throw new Error(
          `The value for 'easing' attribute should contain one of the following easing function names: ${Object.keys(
            EASING_FUNCTIONS
          )}`
        );
      }

      return true;
    }

    _validateHexColor(code) {
      const isValid = /^#([0-9a-f]{3}){1,2}$/i.test(code);

      if (!isValid) {
        throw new Error(
          `The value for 'color' attribute must be a valid HEX color code`
        );
      }

      return true;
    }
  }

  // Register the custom element
  customElements.define('mcwc-countup', CountupComponent);
})();
