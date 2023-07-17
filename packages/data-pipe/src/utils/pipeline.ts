import { Task } from "../types";

function pipeline<T>(
  fns: Task<T>[],
  options: Task<T>["options"],
  initialData: T | null = null
): T | null {
  return fns.reduce((v, f) => f(v, { ...f.options, ...options }), initialData);
}

// @todo fix this
/* eslint-disable  @typescript-eslint/no-explicit-any */
function asyncPipeline<T>(
  fns: any[],
  options: Task<any>["options"],
  initialData: T | null = null
): T | null {
  return fns.reduce(
    async (v, f) => await f(await v, { ...f.options, ...options }),
    initialData
  );
}

export { pipeline, asyncPipeline };
