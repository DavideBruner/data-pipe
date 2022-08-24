import { ConfigData } from "../types";

async function HttpDataFetcher(data: any, { source }: ConfigData, options: any) {
  const results = await fetch(source);
  return results.json();
};

HttpDataFetcher.sourceType = 'remote';

export default HttpDataFetcher;

