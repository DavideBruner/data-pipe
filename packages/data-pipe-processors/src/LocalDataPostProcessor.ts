function LocalDataPostProcessor(
  data: Record<string, any | any[]>,
  _config: unknown,
  options?: {
    filterBy?: Parameters<typeof Array.prototype.filter>[0];
    loadByKey?: string;
    keepKeys?: boolean;
    sortBy?: Parameters<typeof Array.prototype.sort>[0];
  }
) {
  // @TODO Needs another tought on how filter and sort out data before return it
  if (options?.loadByKey) return data[options?.loadByKey];

  data = options?.filterBy
    ? Object.fromEntries(Object.entries(data).filter(options.filterBy))
    : data;
  data = options?.sortBy
    ? Object.fromEntries(Object.entries(data).sort(options.sortBy))
    : data;
  return options?.keepKeys ? data : Object.values(data);
}

export default LocalDataPostProcessor;
