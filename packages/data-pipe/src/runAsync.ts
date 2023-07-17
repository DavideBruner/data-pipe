import { Task } from "./types";
import { asyncPipeline } from "./utils/pipeline";

export default async function runAsync<Data>(
  processors: Task<Data>[],
  options: Task<Data>["options"] = {}
) {
  let data: Data | null = null;
  const errors: unknown[] = [];
  try {
    data = await asyncPipeline<Data>(processors, options);
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } catch (e: any) {
    errors.push(e.message);
  }
  return { data, errors };
}
