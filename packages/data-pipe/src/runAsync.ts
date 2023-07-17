import { Processor } from "./types";
import { asyncPipeline } from "./utils/pipeline";

export default async function runAsync<Data>(
  processors: Processor<Data>[],
  options: Processor<Data>["options"] = {}
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
