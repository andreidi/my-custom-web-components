# my-custom-web-components

A collection of reusable & customisable Custom Web Components that I use across my own vanilla JS projects.

## How to use the components

Import the component:

```html
<script src="path/to/custom-component.js" async></script>
```

Add the component to the page:

```html
<custom-component></custom-component>
```

## Using the minified version

Make sure the dependencies are installed:

```
npm i
```

Run the build script:

```
npm run build
```
*The script will minify the components in `build` folder.*

Use the minified component instead:

```html
<script src="path/to/custom-component.min.js" async></script>
```
