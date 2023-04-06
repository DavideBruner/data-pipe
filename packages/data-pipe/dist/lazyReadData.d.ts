import { Processor } from "./types";
export default function lazyReadData<Data>(processors: Processor<Data>[], options?: Processor<Data>["options"]): (((opts: Processor<Data>["options"]) => void) | {
    data: {
        current: Data | null;
    };
    errors: unknown[];
})[];
//# sourceMappingURL=lazyReadData.d.ts.map