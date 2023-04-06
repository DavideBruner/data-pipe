import { LocalDataParser, LocalDataPostProcessor } from "dipe-processors";

const config = {
  articles: {
    processors: [
      (data, options) =>
        LocalDataParser(data, { source: "./articles" }, options),
      LocalDataPostProcessor,
    ],
  },
};

export default config;
