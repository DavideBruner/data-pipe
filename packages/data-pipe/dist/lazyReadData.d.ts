import { ConfigData } from './types';
export default function lazyReadData({ processors, ...config }: ConfigData, options?: {}): (((opts: any) => void) | {
    data: any;
    errors: any[];
})[];
//# sourceMappingURL=lazyReadData.d.ts.map