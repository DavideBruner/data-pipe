declare function LocalDataPostProcessor(data: Record<string, any | any[]>, _config: unknown, options?: {
    filterBy?: Parameters<typeof Array.prototype.filter>[0];
    loadByKey?: string;
    keepKeys?: boolean;
    sortBy?: Parameters<typeof Array.prototype.sort>[0];
}): any;
export default LocalDataPostProcessor;
//# sourceMappingURL=LocalDataPostProcessor.d.ts.map