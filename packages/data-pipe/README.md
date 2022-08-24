# data-pipe 
> Let your data flow.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

`data-pipe` is a small lib that lets you write data processors functions for data reading and manipulation.
It helps you lift up all the boilerplate needed for processing static or server data from domains specific contexts to pre-configured (or custom) processors callbacks.

## Why would I need this?
`data-pipe` allows you to define data flows processors in a structured and (hopefully) readable way.

- It provides you a way to configure data sources and how this data goes through (whenever it comes from local or remote sources) and gets manipulated (using f.i. normalization, aggregation, filtering, sorting or whaterver process) before it reaches the output destination.

- Writing one massive logic doesn't organize well. Asynchronous data fetching frameworks for example like `react-query` and `apollo` already allow you to write data queries and mutations closer to the component contexts. Why can't static/server data fetcher be written in a similar way?!.

Here are some use case where I found myself using the package:
- Next.js static/server data fetching and manipulation
- NodeJS Twitter bot (this libs is used for setting up the whols data flow, from article sources to multichannel posting) every step of the pipeline is configured in a config.js file (whch can then use .env variables to access sensible data such as API tokens)

## Installation 🔧
```bash
npm install -S data-pipe
or 

yarn add data-pipe
```

## Usage 💡
You can immagine something like this to be a valid configuration object

```js
// example.config.js
const { createProcessor } = require('data-pipe');
const { LocalFilesPostProcessor } = require('data-pipe/processors');
const LocalDataProcessor = () => {};

const config = {
  articles: {
    processors: [
      LocalDataProcessor, // use a simple function
      FilterProcessor,
    ]
  },
  posts: { 
    processors: [
      createProcessor(LocalDataProcessor, { options: {
        source: './extra-posts-overrite',
      }}), // use the same function but with some additional options
      LocalFilesPostProcessor
    ],
    // Shared config options between processors
    source: './posts',
    extraExampleData: {},
  },
};

export default config;
```

And then the actul implementation will look similar to:

```js
const { articles, posts } = require('./example.config.js');
let { data, errors } = readData(articles, {});

// or simply
let { data, errors } = readData({
  processors: [],
}, {});
```

See the example in this repo for some ideas on how to organize your data using preconfigured processors.


### Read data (readData)
```js
let { data, errors } = readData(articles):
```

### Async read data (readAsyncData) WIP
```js
let { data, errors } = await readAsyncData(articles):
// or
readAsyncData(articles).then({ data }).catch(errors => console.log(errors));
```

### Lazy read data (lazyReadData)

```js
let [{ data, errors }, getArticles] = lazyReadData(articles):
// execute
getArticles({});
```

### Read data as stream (readStreamData) WIP
```js
```

### Write data (writeData) WIP
```js
```

## How to alter Processors or create a custom one?
Processors are just functions. You can add your custom processor or either alter a specific one by creating a function which wraps up the old implementation or create it from scratch. Let's use a simple FilterProcessor as an example:

```ts
const FilterProcessor = (data: any, config: ConfigData, options?: any) => {
  const filteredData = Object.fromEntries(Object.entries(data).filter(options.filterBy));
  return Object.values(filteredData);
}
```

If you wanna provide additional options specific to the processor you can use the `createProcessor` as follows.

```js
const SimpleProcessor = (data, config, options) => {
  console.log('Here is the custom value: ' . options.customOption);
}

const config = {
  data_one: {
    processors: [
      createProcessor(SimpleProcessor, { customOption: 'some-value' }) // console logs `Here is the custom value: some-value`
    ]
  },
  data_two: {
    processors: [
      SimpleProcessor, // console logs `Here is the custom value: test-value`
    ]
    customOption: 'test-value',
  },
  data_three: {
    processors: [
      SimpleProcessor, // console logs `Here is the custom value: undefined`
    ]
  }
}
```

## Built in processors 
`data-pipe` comes with a series of preconfigured and quite opinioneted set of processors, however you can just ignore them and use your own implementations.

### LocalDataParser
Parse local files hosted in the `source` directory.

### LocalFilesPostProcessor (filter and sorting basic processor)
Filters and sort out local parsed data.

### LocalDataStream (WIP)
### RemoteDataStream (WIP)

[version-image]: https://img.shields.io/npm/v/data-pipe
[version-url]: https://npmjs.org/package/data-pipe

[license-image]: https://img.shields.io/npm/l/data-pipe
[license-url]: https://github.com/DavideBruner/data-pipe/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/data-pipe
[size-url]: https://github.com/DavideBruner/data-pipe/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/data-pipe
[download-url]: https://www.npmjs.com/package/data-pipe