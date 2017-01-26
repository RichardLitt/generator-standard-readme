# <%= moduleName %>
<% if (banner) { %>
![banner](<% bannerPath %>)
<% } %><% if (badge) { %>
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)<% } %><% if (badges) { %>
TODO: Put more badges here.<% } %>

> <%= description %>

<% if (longDescription) { %>TODO: Fill out this long description.

<% } %>## Table of Contents

<% if (security) { %>- [Security](#security)
<% } %><% if (background) { %>- [Background](#background)
<% } %>- [Install](#install)
- [Usage](#usage)
<% if (API) { %>- [API](#api)
<% } %><% if (maintainers) { %>- [Maintainers](#maintainers)
<% } %>- [Contribute](#contribute)
- [License](#license)

<% if (security) { %>## Security

<% } %><% if (background) { %>## Background

<% } %>## Install

```
```

## Usage

```
```

<% if (API) { %>## API

<% } %><% if (maintainers) { %>## Maintainers

<% } %>## Contribute

<% if (contributeFile) { %>See [the contribute file](contribute.md)!

<% } %><% if (prs) { %>PRs accepted.<% } %>

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

<% if (mit) { %>MIT<% } %><% if (license) { %><% license %><% } %> © <%= licensee %>
