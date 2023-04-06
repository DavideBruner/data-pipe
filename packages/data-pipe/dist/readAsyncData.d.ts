import { Processor } from "./types";
export default function readAsyncData<Data>(processors: Processor<Data>[], options?: Processor<Data>["options"]): Promise<{
    data: Data | null;
    errors: unknown[];
}>;
//# sourceMappingURL=readAsyncData.d.ts.map