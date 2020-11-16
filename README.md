# Student Site Boilerplate

Student Site Boilerplate aims to introduce new web development students to
modern build tools in a simplified manner. The goal of this project is to
be able to build and deploy a simple static site right to Github and allow
students to explore Sass and ES6 without worrying about setting up Babel,
Webpack, or other build tools.

[Static Site Boilerplate](http://staticsiteboilerplate.com//) is used as a
starting point for its utility and relative simplicity. All commands are run
through npm scripts so additional technologies like Grunt, Gulp, Yarn, etc.
don't have to be taught. Github Pages is used to reduce the overhead of trying
to find hosting for student projects, and keep progress in one place.

Other modifications include simplifying the output from Webpack to errors
only so students aren't wading through a pile of success messages to find
out if their build has successfully deployed to Github Pages and adding HTML5
linting.

**Static Site Boilerplate Documentation:** [https://docs.staticsiteboilerplate.com/](https://docs.staticsiteboilerplate.com/)

The Student Site Boilerplate is part of a lesson in my web design and development class,
and I teach Github, Tower, and VSCode alongside this boilerplate. If you are interested
in the documentation for this process and setting up your development environment in the
same way, you can follow along with [this Google Doc](https://docs.google.com/document/d/14usTx6c1L1MwSjRvwtk4spz40EDgHV50_53kKAiHzcM/edit?usp=sharing).

## Prerequisites

- [Node.js and npm (Node Package Manager)](https://nodejs.org/en/) - this repository has been tested through 12.19.0 LTS. Windows users, be sure to check the "Install additional tools" checkbox during your installation process.
- A code editor of your choice, such as [VSCode](https://code.visualstudio.com/) or [Sublime Text](https://www.sublimetext.com/)
- A way to connect to and work with Git and Github. If you like having a user interface to do this, I recommend (and personally use) [Tower](https://www.git-tower.com/students/mac). (A Windows version is also available!)

## Notes for Windows users

- Your computer may use different linebreaks than ESLint expects. [You can add a comment to fix this.](https://stackoverflow.com/questions/37826449/expected-linebreaks-to-be-lf-but-found-crlf-linebreak-style)
- If you see errors with Sass on your first build, try running `npm rebuild node-sass`.

## Installation

Clone or download this repository using your favorite method (Command Line, GUI such as Tower, etc)

Change directory to this repository on your computer (path may be different depending on where the repository is located):

 ```bash
cd student-site-boilerplate
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

_This  is fully dependent on your code and doesn't mean that Static Site Boilerplate won't work in older browsers, just that we'll ensure compatibility with the ones mentioned above._

## License

The code is available under the [MIT license](LICENSE).
