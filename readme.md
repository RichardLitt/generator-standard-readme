# generator-standard-readme

[![Build Status](https://travis-ci.org/RichardLitt/generator-standard-readme.svg?branch=master)](https://travis-ci.org/RichardLitt/generator-standard-readme)

> Scaffold out a Standard Readme

This generator conforms to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification. It creates a minimally compliant standard readme for your cross-language project, with some options.

Tip: Use [chalk](https://github.com/sindresorhus/chalk) if you want colors in your CLI.

## Table of Contents

- [Install](#install)
  - [With Yeoman](#with-yeoman)
- [Usage](#usage)
  - [Fields to fill out](#fields-to-fill-out)
- [Contribute](#contribute)
- [License](#license)

## Install

This generator requires [node](https://nodejs.org), [npm](https://npmjs.com), and [yeoman](http://yeoman.io/).

You can install it by itself by running:

```sh
npm install --global generator-standard-readme
```

### With Yeoman

You can also install it as a standard yeoman generator, by installing `yo` as well:

```
npm install --global yo
```

However, this isn't necessary.

## Usage

```
$ standard-readme
```

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
- Do you have a CONTRIBUTE.md file?
- Are PRs accepted?
- Is an MIT license OK?
  - What is your license?
- Who is the License holder (probably your name)?

## Contribute

Please contribute! [Look at the issues](https://github.com/RichardLitt/generator-standard-readme/issues).

## License

MIT © 2016 [Richard Littauer](http://burntfen.com)
