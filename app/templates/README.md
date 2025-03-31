# <%= moduleName %>
<% if (banner) { %>
![banner](<%= bannerPath %>)
<% } %><% if (badge) { %>
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)<% } %><% if (badges) { %>
TODO: Put more badges here.<% } %>

<%= description %>

<% if (longDescription) { %>TODO: Fill out this long description.

<% } %>## Table of Contents

<% if (security) { %>- [Security](#security)
<% } %><% if (background) { %>- [Background](#background)
<% } %>- [Install](#install)
- [Usage](#usage)
<% if (API) { %>- [API](#api)
<% } %><% if (mainMaintainer) { %>- [Maintainers](#maintainers)
<% } %>- [Contributing](#contributing)
- [License](#license)

<% if (security) { %>## Security

<% } %><% if (background) { %>## Background

<% } %>## Install

```sh
```

## Usage

```sh
```

<% if (API) { %>## API

<% } %>## Maintainers

[@<%= mainMaintainer %>](https://<%= hostedDomain %>/<%= mainMaintainer %>)

## Contributing

<% if (contributingFile) { %>See [the contributing file](contributing.md)!

<% } %><% if (prs) { %>PRs accepted.<% } %>

Small note: If editing the README, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

<% if (mit) { %>MIT<% } %><% if (!mit && license) { %><%= license %><% } %> © <% if (year) { %><%= new Date().getFullYear() %><% } else { %><%= diffYear %><% } %> <%= licensee %>
