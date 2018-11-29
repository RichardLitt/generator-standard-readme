# generator-standard-readme

[![Build Status](https://travis-ci.org/RichardLitt/generator-standard-readme.svg?branch=master)](https://travis-ci.org/RichardLitt/generator-standard-readme) [![Greenkeeper badge](https://badges.greenkeeper.io/RichardLitt/generator-standard-readme.svg)](https://greenkeeper.io/)

> Scaffold out a Standard Readme

This generator conforms to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification. It creates a minimally compliant standard readme for your cross-language project, with some options.

Tip: Use [chalk](https://github.com/sindresorhus/chalk) if you want colors in your CLI.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
  - [Fields to fill out](#fields-to-fill-out)
- [Contributing](#contributing)
- [License](#license)

## Install

This generator requires [node](https://nodejs.org), [npm](https://npmjs.com), and [yeoman](http://yeoman.io/).

You can install it by running:

```sh
npm install --global yo generator-standard-readme
```

## Usage

With [yo](https://github.com/yeoman/yo):

```
$ yo standard-readme
```

This will write a file, `readme.md`, to the local directory.

### Fields to fill out

`standard-readme` will ask you a set of questions, which will help it fill out the README. These are:

- What do you want to name your module?
- What is the description of this module?
- Do have a banner image?
  - Where is the banner image? Ex: \'img/banner.png\'
- Do you want a TODO dropped where your badges should be?
- Do you want a TODO dropped where your long description should be?
- Do you need a prioritized security section?
- Do you need a background section?
- Do you need an API section?
- What is the GitHub handle of the main maintainer?
- Do you have a CONTRIBUTING.md file?
- Are PRs accepted?
- Is an MIT license OK?
  - What is your license?
- Who is the License holder (probably your name)?
- Use the current year?
  - What years would you like to specify?

## Maintainer

[@RichardLitt](https://github.com/RichardLitt)

## Contributing

Please contribute! [Look at the issues](https://github.com/RichardLitt/generator-standard-readme/issues).

## License

MIT © 2016 [Richard Littauer](http://burntfen.com)
