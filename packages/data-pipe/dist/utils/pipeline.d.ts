import { Processor } from "../types";
declare function pipeline<T>(fns: Processor<T>[], options: Processor<T>["options"], initialData?: T | null): T | null;
declare function asyncPipeline<T>(fns: any[], options: Processor<any>["options"], initialData?: T | null): T | null;
export { pipeline, asyncPipeline };
//# sourceMappingURL=pipeline.d.ts.map