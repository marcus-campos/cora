# CORA
[![Waffle.io - Columns and their card count](https://badge.waffle.io/201aed90a77f55325047455dc367445c.svg?columns=all)](https://waffle.io/ZupIT/cora)

[![CircleCI](https://circleci.com/gh/ZupIT/zup-cora-ui/tree/master.svg?style=svg&circle-token=0aac8eab7859cbf3533c15f219c6ea423d58750b)](https://circleci.com/gh/ZupIT/zup-cora-ui/tree/master)


CORA is a platform to easy to create and manage workflows ecosystem to chatbot.

# Structure

```bash
├── .circleci
├── .github
├── packages
├── docs
├── .gitignore
├── lerna.json
├── package.json
└── README.md
```

# Projects

This repository includes Web SDK from CORA project. That projects are inside packages folder.

CORA repository are to working with monorepo convention.
Each project work alone.

```bash
├── packages
│   ├── cora-widget
│   └── sdk-web
```

#### cdn-widget
<pre>
  Project to generate script to embed chatbot in a web application.
</pre>

#### sdk-web
<pre>
  Project to generate a chatbot web.
</pre>


# Installation

Select a project <i>inside packages</i> and execute these commands below:

```bash
$ npm install
$ npm start
```

# Documentations

[SDK Web](./docs/sdk-web.md) - Widget to add CORA to an HTML page
