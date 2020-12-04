# Idea Generator

This Idea Generator app fetches bookmarks from your collection on raindrops.io and creates an idea generator from them.

## Requirements

You will need to add a .env file with your oAuth token in the root of the project. Use the `OAUTH_TOKEN` variable like so:

```
OAUTH_TOKEN=YOUR-TOKEN-HERE
```

## Installation

Clone or download this repository using your favorite method (Command Line, GUI such as Tower, etc)

Change directory to this repository on your computer (path may be different depending on where the repository is located):

 ```bash
cd idea-generator
 ```

Run `npm install` to install development dependencies, then see `Usage` below.

## Usage

- `npm run start`: Start development. Opens a new window in your favorite browser which will refresh when you change your code. Edit your code in the `src` folder.
- `npm run lint`: Run all linters on your code.
- `npm run fix`: Run all linters on your code, and attempt to automatically fix issues in JS and Sass/CSS.
- `npm run lint:html`: Lint your HTML for possible formatting and coding standards errors using HTML Validate.
- `npm run lint:styles`: Lint your Sass/CSS styles for possible formatting and coding standards errors using Stylelint.
- `npm run lint:js`: Lint your JavaScript for possible formatting and coding standards errors using ESLint.
- `npm run build`: Create a production-ready build of your code to the `dist` folder.
- `npm run deploy`: Builds and deploys your code to Github Pages.

## Features

* **Modern Technologies:** Full support for HTML5, JavaScript (Vanilla and ES6) and CSS (Sass and PostCSS)
* **Built-in Server:** Local development server with hot reloading
* **Performance Tuning:** CSS and JavaScript transpilation, bundling, autoprefixing, and minification
* **Image Optimization:** Optimizes images for loading speed
* **Favicon Generation:** Automatically generates all favicons for Web, Apple and Android devices from one image file
* **Code Linting:** Full support for JavaScript (ESLint) and CSS (StyleLint) linting
* **Sitemap & Robots.txt Generation:** Automatically generates a sitemap.xml and robots.txt files
* **Cutting Edge:** Uses Webpack for processing and bundling your code
* **Deployment:** Built-in support for deploying `dist` to the `gh-pages` branch. Serve your site right on Github Pages!

## Browser Support

* Chrome _\(latest 2\)_
* Edge _\(latest 2\)_
* Firefox _\(latest 2\)_
* Internet Explorer 9+
* Opera _\(latest 2\)_
* Safari _\(latest 2\)_

## License

The code is available under the [MIT license](LICENSE).
