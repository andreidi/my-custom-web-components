# [my-custom-web-components](https://my-custom-web-components.netlify.app/)

A collection of reusable & customisable Custom Web Components that I use across my own vanilla JS projects.

## How to use the components

1. Import the component:

```html
<script src="path/to/custom-component.js" async></script>
```

_`async` attribute is recommended but not required. [More info](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-async)_

2. Add the component to the page:

```html
<custom-component attribute="a string attribute"></custom-component>
```

_You can pass custom attributes to the components._

## Using the minified version

1. Make sure the dependencies are installed:

```
npm i
```

2. Run the build script:

```
npm run build
```

_The script will minify the components in `build` folder._

3. Use the minified component instead:

```html
<script src="path/to/custom-component.min.js" async></script>
```
