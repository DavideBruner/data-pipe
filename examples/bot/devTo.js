const DevToJS = require('dev-to-js');
const DevToClient = new DevToJS({ apiKey: '' })

const getLatestArticles = async tag => {
  const articles = await DevToClient.getArticles({ tag });
  return articles;
}

module.exports = getLatestArticles