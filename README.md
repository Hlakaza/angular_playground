This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Table of contents

- [Status](#status)
- [What's included](#whats-included)
- [Documentation](#documentation)


Read the [Getting started page](https://getbootstrap.com/docs/4.0/getting-started/introduction/) for information on the framework contents, templates and examples, and more.

## Status
- [Test on latest bootstrap version](https://github.com/twbs/bootstrap#status) 

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
styles/
├── mixins/
│   ├── _alert.scss
│   ├── etc...
├── utilities/
│   ├── _align.scss
│   ├── etc...
├── _alert.scss
└── 
```

## Documentation

Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com/) and publicly hosted on GitHub Pages at <https://getbootstrap.com/>. The docs may also be run locally.

Documentation search is powered by [Algolia's DocSearch](https://community.algolia.com/docsearch/). Working on our search? Be sure to set `debug: true` in `assets/js/application.js` file.

### Running documentation locally

1. Run through the [tooling setup](https://getbootstrap.com/docs/4.0/getting-started/build-tools/#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. Run `npm install` to install Node.js dependencies.
3. Run `npm run test` (or a specific NPM script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
4. From the root `/bootstrap` directory, run `npm run docs-serve` in the command line.
5. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/).

### Documentation for releases

- For v4.1.0: <https://github.com/twbs/bootstrap/releases/tag/v4.1.0>
