
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
  }
};

export default config;