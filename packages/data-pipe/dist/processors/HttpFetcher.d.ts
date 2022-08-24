import { ConfigData } from "../types";
declare function HttpFetcher(data: any, { source }: ConfigData, options: any): Promise<any>;
declare namespace HttpFetcher {
    var sourceType: string;
}
export default HttpFetcher;
//# sourceMappingURL=HttpFetcher.d.ts.map