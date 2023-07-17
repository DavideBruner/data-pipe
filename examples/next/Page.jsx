import Head from "next/head";
import { runSync } from "dipe";

import config from "../dipe.config";

export async function getStaticProps() {
  const { data: articles } = runSync(config.articles);
  return {
    props: { articles },
  };
}

const Page = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Next.JS Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1> Hello World 👋 </h1>
      </main>

      {articles.map(({ title }) => (
        <p>{title}</p>
      ))}

      <footer>
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered by me, using NextJs and ❤️
        </a>
      </footer>
    </div>
  );
};

export default Page;
