# next-dipe (next-data-pipe)

> Let your data flow in Next.js super easily.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

`next-dipe` is a small lib that wraps up `dipe (data-pipe)` and provides some additional utilies such as (for example in Next.js by lifting static props).

## Why would I need this?

This library works perfectly in combination with the [next-data-hooks](https://) library.

It works by lifliting up all the boilerplate needed for processing static or server data from props to pre-configured processors callbacks.

## Installation 🔧

```bash
npm install -S next-dipe

or

yarn add next-dipe
```

## Usage 💡

This library works as an etension of the `data-pipe` library, and provides some utilities build in for Next.js projects.

```js
// example.config.js
const { LocalFilesPostProcessor } = require("next-dipe");

const config = {
  articles: {
    processors: [() => {}, LocalFilesPostProcessor],
  },
};

export default config;
```

We also expose a `useConfig` utiltiy used to return a direct link to the config file.
To use that function it's necessary to first configure the webpack config to properly resolve the config file previously created.

```js
// next.config.js
const { resolveConfig } = require("next-dipe");
module.exports = {
  webpack: (config, options) => {
    return resolveConfig(config, { configFilePath: "./example.config.js" });
  },
};
```

And then the actual implementation will look just like:

```js
import { getConfig, runSync } from "next-dipe";

const articles = getConfig("articles");
let { data, errors } = runSync(articles, {});
```

> You can totally skip this part and just use the `next-dipe` package (as shown below):

```js
import { runSync } from "next-dipe";
let { data, errors } = runSync(
  {
    processors: [],
  },
  {}
);

// or
import config from "../example.config.js";
let { data, errors } = runSync(config.articles, {});
```

See the example in this repo for some ideas on how to organize your data using preconfigured processors.
And check what you can do with the `data-pipe` package [here]().

[version-image]: https://img.shields.io/npm/v/next-dipe
[version-url]: https://npmjs.org/package/next-dipe
[license-image]: https://img.shields.io/npm/l/next-dipe
[license-url]: hhttps://github.com/DavideBruner/data-pipe/tree/main/LICENSE.txt
[size-image]: https://img.shields.io/bundlephobia/minzip/next-dipe
[size-url]: https://github.com/DavideBruner/data-pipe/tree/main/packages/next-data-pipe/dist/index.js
[download-image]: https://img.shields.io/npm/dm/next-dipe
[download-url]: https://www.npmjs.com/package/next-dipe
