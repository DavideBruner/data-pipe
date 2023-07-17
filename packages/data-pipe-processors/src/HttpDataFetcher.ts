async function HttpDataFetcher(_data: unknown, { source }: { source: string }) {
  const results = await fetch(source);
  return results.json();
}

HttpDataFetcher.sourceType = "remote";

export default HttpDataFetcher;
