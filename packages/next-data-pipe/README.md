# next-data-pipe 
> Let your data flow in Next.js super easily.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]


`next-data-pipe` is a small lib that wraps up `data-pipe` and provides some additional utilies such as (for example in Next.js by lifting static props).


## Why would I need this?
This library works perfectly in combination with the [next-data-hooks](https://) library.

It works by lifliting up all the boilerplate needed for processing static or server data from props to pre-configured processors callbacks.

## Installation 🔧
```bash
npm install -S next-data-pipe

or 

yarn add next-data-pipe
```

## Usage 💡

This library works as an etension of the `data-pipe` library, and provides some utilities build in for Next.js projects.

```js
// example.config.js
const { LocalFilesPostProcessor } = require('data-pipe/processors');

const config = {
  articles: {
    processors: [
      () => {},
      LocalFilesPostProcessor,
    ]
  }
};

export default config;
```

We also expose a `useConfig` utiltiy used to return a direct link to the config file.
To use that function it's necessary to first configure the webpack config to properly resolve the config file previously created.

```js
// next.config.js
const { resolveConfig } = require('next-data-pipe');
module.exports = {
  webpack: (config, options) => {
    return resolveConfig(config, { configFilePath: './example.config.js' })
  },
}
```

And then the actual implementation will look just like:

```js
import { getConfig } from 'next-data-pipe';
import { readData } from 'data-pipe';

const articles = getConfig('articles');
let { data, errors } = readData(articles, {});
```

> You can totally skip this part and just use the `data-pipe` package (as shown below):

```js
import { readData } from 'data-pipe';
let { data, errors } = readData({
  processors: [],
}, {});

// or 
import config from '../example.config.js';
let { data, errors } = readData(config.articles, {});
```

See the example in this repo for some ideas on how to organize your data using preconfigured processors.
And check what you can do with the `data-pipe` package here.

[version-image]: https://img.shields.io/npm/v/data-pipe
[version-url]: https://npmjs.org/package/data-pipe

[license-image]: https://img.shields.io/npm/l/data-pipe
[license-url]: https://github.com/DavideBruner/data-pipe/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/data-pipe
[size-url]: https://github.com/DavideBruner/data-pipe/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/data-pipe
[download-url]: https://www.npmjs.com/package/data-pipe