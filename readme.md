# generator-make-readme

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Quickly generate standards-compliant READMEs for open source software projects.

## Overview
This [Yeoman](http://yeoman.io/) generator conforms to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification with some added  customizations to comply with AffiniPay's supplemental README standards. It creates a minimally compliant standard README for your open source software project.

## Table of Contents
-   [Background](#background)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Contribute](#contribute)
-   [License](#license)

## Background
Github is an important platform for collaborative software development. It's also a channel for AffiniPay to share tools with our partner/developer community. We need to provide concise, accurate, and standardized documentation for all AffiniPay open source projects.

Standardizing our READMEs makes creating and maintaining them easier, promotes a better developer experience, and helps us earn trust within the partner/developer community.

An effective README thoroughly explains:
-   What a project does (with context)
-   What a project looks like in action
-   How to install it
-   How to use it (with working examples)
-   All API methods/functions

This project is a customized version of Richard Littauer's [generator-standard-readme](https://github.com/RichardLitt/generator-standard-readme) project, but it follows the same specification.

## Installation
This generator requires [node](https://nodejs.org/), [npm](https://npmjs.com/), and [yeoman](http://yeoman.io/).

You can install it by itself by running:

```
npm install --global generator-make-readme
```

### With Yeoman
You can also install it as a standard Yeoman generator by installing `yo`:

```
npm install --global yo
```

## Usage
```
$ make-readme
```

With `yo`:
```
yo make-readme
```

This will write a file (README.md) to the local directory after you follow the prompts in a terminal.

### Fields to fill out
The `make-readme` generator prompts you for information to create a README outline that contains all optional and required sections. These sections contain placeholder text and examples that you must modify before publishing the README.

Prompts include the following:

1.  What is the name of your project? - Defaults to the name of the repo.
2.  Summarize your project in one sentence: - You can add more detail later in the _Overview_ and/or _Background_ sections (if necessary).
3.  Do you have a banner image? - Optional.
4.  Do you want a standard-readme compliant badge? - Optional.
5.  Do you want a TODO dropped where more badges should be? - Optional.
6.  Do you want to add a prioritized _Security_ section to the top of the README? - Optional.
7.  Do you need a _Configuration_ section? - Optional.
8.  Do you need a _Background_ section? - Optional.
9.  Do you need an _API_ section? - Optional.
10. Are pull requests accepted? - If true, adds a _Contribute_ section with default guidelines.
11. Is an MIT license OK? - If false, enter the license type in the next prompt (e.g., ISC). Make sure to update the license file in the repo.
12. Who is the license holder? - The default is AffiniPay LLC.

## Contribute
Contributions in the form of GitHub pull requests are welcome. Please adhere to the following guidelines:
  - Before embarking on a significant change, please create an issue to discuss the proposed change and ensure that it is likely to be merged.
  - Follow the coding conventions used throughout the project, including 2-space indentation and no unnecessary semicolons. Many conventions are enforced using eslint.
  - Any contributions must be licensed under the MIT license.


## License
[MIT](./license) © AffiniPay LLC
