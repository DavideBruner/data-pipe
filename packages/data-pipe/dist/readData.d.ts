import { Processor } from "./types";
export default function readData<Data>(processors: Processor<Data>[], options?: Processor<Data>["options"]): {
    data: Data | null;
    errors: unknown[];
};
//# sourceMappingURL=readData.d.ts.map