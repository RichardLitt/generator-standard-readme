# <%= moduleName %>

<% if (banner) { %>
![banner](<% bannerPath %>)

<% } %><% if (badges) { %>
TODO: Put badges here.

<% } %>> <%= description %>

<% if (longDescription) { %>TODO: Fill out this long description.

<% } %>## Table of Contents

<% if (security) { %>- [Security](#security)
<% } %><% if (background) { %>- [Background](#background)
<% } %>- [Installation](#installation)
- [Usage](#usage)
<% if (API) { %>- [API](#api)
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

<% } %>## Contribute

<% if (contributeFile) { %>See [the contribute file](contribute.md)!

<% } %><% if (prs) { %>PRs accepted.<% } %>

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

<% if (mit) { %>MIT<% } %><% if (license) { %><% license %><% } %> © <%= licensee %>
