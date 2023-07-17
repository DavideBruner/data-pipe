"use strict";

const { runAsync } = require("dipe");

const getLatestArticles = require("./devTo");

const InitialTask = async () => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: "fake-data",
        title: "Simple title",
        description: "description",
        slug: "slug",
      },
    ]);
  });
};

// It could be everything from and API call to a web scraping, gonna make an example of a web API call for simplicity
const ArticlesAPITask = async (data, options) => {
  const articles = await getLatestArticles("react");
  return [...data, ...articles];
};

const config = {
  articles: {
    processors: [InitialTask, ArticlesAPITask],
  },
};

async function scrap() {
  const { data, errors } = await runAsync(config.articles.processors);
  console.log({ data, errors });
  // Output:
  // { data: [
  //   { id: 'fake-data',
  //     title: 'Simple title',
  //     description: 'description',
  //     slug: 'slug'
  //   },
  //   {
  //     id: 1175279,
  //     title: 'Building a draggable slider in React',
  //     description: 'Written by Pelumi Akintokun✏️  Website sliders are flexible user interface elements that can be...',
  //     readable_publish_date: 'Aug 24',
  //     slug: 'building-a-draggable-slider-in-react-1eac',
  //     path: '/logrocket/building-a-draggable-slider-in-react-1eac',
  //     url: 'https://dev.to/logrocket/building-a-draggable-slider-in-react-1eac',
  //     comments: '...',
  //     ...
  //   }
  // ], errors: [] }
}

scrap();
