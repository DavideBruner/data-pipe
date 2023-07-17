import { Task } from "../types";
declare function pipeline<T>(fns: Task<T>[], options: Task<T>["options"], initialData?: T | null): T | null;
declare function asyncPipeline<T>(fns: any[], options: Task<any>["options"], initialData?: T | null): T | null;
export { pipeline, asyncPipeline };
//# sourceMappingURL=pipeline.d.ts.map