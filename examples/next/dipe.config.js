
const { 
  LocalDataParser,
  LocalDataPostProcessor
} = require('dipe-processors');

const config = {
  articles: {
    processors: [
      LocalDataParser,
      LocalDataPostProcessor
    ],
    source: './articles'
  }
};

export default config;