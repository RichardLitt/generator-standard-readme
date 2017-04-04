# <%= moduleName %>
<% if (banner) { %>
![banner](<%= bannerPath %>)
<% } %><% if (badge) { %>
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)<% } %><% if (badges) { %>
TODO: Put more badges here.<% } %>

> <%= description %>

## Overview
_Explain what your module does in greater detail and why someone might want to use it._

## Table of Contents

<% if (security) { %>- [Security](#security)
<% } %><% if (background) { %>- [Background](#background)
<% } %>- [Installation](#installation)<% if (configuration) { %>
- [Configuration](#configuration)<% } %>
- [Usage](#usage)
<% if (API) { %>- [API](#api)<% } %>
<% if (contribute) { %>- [Contribute](#contribute)<% } %>- [License](#license)

<% if (security) { %>## Security
_Highlight important security issues/concerns in this section._
<% } %>

<% if (background) { %>## Background
_If your module depends on important but not widely known abstractions or other ecosystems, explain them here. This is also a good place to explain the module's motivation if similar modules already exist._
<% } %>

## Installation
_Don't forget to include system prerequisites. Even simple npm installation instructions belong in this section. For example:_

>This module is written in Node.js, which must be installed prior to use. Node.js includes the Node >Package Manager (NPM), which is used for installing dependencies.

>After cloning the repository, install dependencies and build:
>```
>$ npm install
>```

>After building, you can install the tool globally to run it from anywhere:
>```
>$ npm install --global
>```

<% if (configuration) { %>## Configuration
_If your module requires configuration before developers can use it, explain it in this section. For example:_

>1. Contact AffiniPay Support to create a partner OAuth2 application.
>2. Configure OAuth and Redirect URI
>3. Retrieve your AffiniPay Partner Application Client ID and Secret
<% } %>

## Usage
_Show developers what a module looks like in action so they can quickly determine whether the example meets their needs. This section should contain clear, runnable code examples. For example:_
>```
>$ virtsecgroup --help

>  Usage: index [options] [input-file]

>  Options:

>    -h, --help                  output usage information
>    --dump-ast                  Dump parse AST
>    --dump-charts-on-error      Dump parse charts if an error occurs
>    -o, --output <output-file>  Specify the Terraform output filename
>    -v, --verbose               Increase verbosity of output
>```

<% if (API) { %>## API
_The API section should detail the module's objects and functions, their signatures, return types, callbacks, and events in detail. Types should be included where they aren't obvious. Caveats should be made clear._

## Contribute

<% } %><% if (prs) { %>Contributions in the form of GitHub pull requests are welcome. Please adhere to the following guidelines:
  - Before embarking on a significant change, please create an issue to discuss the proposed change and ensure that it is likely to be merged.
  - Follow the coding conventions used throughout the project, including 2-space indentation and no unnecessary semicolons. Many conventions are enforced using eslint.
  - Any contributions must be licensed under the MIT license.
  <% } %>

## License

<% if (mit) { %>[MIT](./LICENSE)<% } %><% if (license) { %><%= license %><% } %> © <%= licensee %>
