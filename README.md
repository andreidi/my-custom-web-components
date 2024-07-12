# [my-custom-web-components](https://my-custom-web-components.netlify.app/)

A collection of reusable, customizable, and dependency-free Custom Web Components in plain HTML, CSS, and JavaScript. Just copy and paste them into your apps.

## How to use the components

1. Copy and paste the component file:

    Download or copy the file containing the custom web component.

2. Update to fit your needs:

    Customize the component's HTML, CSS, and JavaScript as required to match your app's design and functionality.

3. Import the component into your HTML:

   ```html
   <script src="path/to/your/custom-component.js" async></script>
   ```

   _`async` attribute is recommended but not required. [More info](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-async)_

4. Insert the component to the page:

   ```html
   <your-custom-component-tag attribute="a string attribute"></your-custom-component-tag>
   ```

That's it! Your custom web component should now be integrated and functional within your application.

## Contributing suggestions

1. [Fork the repo](https://github.com/andreidi/my-custom-web-components/fork) and clone it locally:

   ```
   git clone git@github.com/<your_username>/my-custom-web-components.git
   ```

2. Add upstream remote:

   ```
   git remote add upstream git@github.com/andreidi/my-custom-web-components.git
   ```

3. Create your feature branch:

   ```
   git checkout -b <component-name>/<feature-name>
   ```

4. Commit your changes using [Conventional Commits specification](https://www.conventionalcommits.org/) for messages (`<type>(<component-name>): <description>`):

   ```
   git commit -m 'feat(<component-name>): Add a new feature.'
   ```

5. Push to the branch:

   ```
   git push -u origin <component-name>/<feature-name>
   ```

6. Submit a pull request.
8. Nice to have: Keep the `<component-name>/<feature-name>` branch up to date. I usually sync my repo with upstream at the start of every day (and before pushing changes to feature branch).

   ```
   git checkout master && git fetch upstream && git merge upstream/master && git push origin master
   ```
   then either `rebase`:

   ```
   git checkout <component-name>/<feature-name>

   git rebase master

   git push -f
   ```

   or `merge`

   ```
   git checkout <component-name>/<feature-name>

   git merge --no-ff master

   git push
   ```
