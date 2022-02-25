# [my-custom-web-components](https://my-custom-web-components.netlify.app/)

A collection of reusable, customisable & dependency-free Custom Web Components that I use across my own vanilla JS projects.

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

## Contributing

_Note: I use `component-name` as branch names. For forks, I suggest (not mandatory) to use `component-name/feature-name` as branch names._

1. Fork the repo
```
git clone git@github.com/diandrei/my-custom-web-components.git
```

2. Add upstream remote:
```
git remote add upstream git@github.com/diandrei/my-custom-web-components.git
```

3. Sync your fork with upstream/master:
```
git checkout master && git fetch upstream && git merge upstream/master && git push origin master
```

4. Create your feature branch:
```
git checkout -b component-name/feature-name
```

5. Commit your changes:
```
git commit -m '[component-name/feature-name] Add a new feature.'
```

6. Push to the branch:
```
git push -u origin component-name/feature-name
```

7. Submit a pull request.
8. Keep the `component-name/feature-name` branch up to date. I usually sync my repo with upstream at the start of every day (and before pushing changes to feature branch).
   To do so, repeat step 3, then:
```
git checkout component-name/feature-name

git rebase master

git push -f
```
