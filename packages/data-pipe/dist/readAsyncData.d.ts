import { ConfigData } from './types';
export default function readAsyncData({ processors, ...config }: ConfigData, options?: {}): Promise<{
    data: any;
    errors: any[];
}>;
//# sourceMappingURL=readAsyncData.d.ts.map