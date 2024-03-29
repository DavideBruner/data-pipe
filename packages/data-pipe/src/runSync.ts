import { Task } from "./types";
import { pipeline } from "./utils/pipeline";

export default function runSync<Data>(
  processors: Task<Data>[],
  options: Task<Data>["options"] = {}
) {
  // @todo implement a caching mechanism
  let data: Data | null = null;
  const errors: unknown[] = [];

  try {
    data = pipeline<Data>(processors, options);
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } catch (e: any) {
    errors.push(e.message);
  }

  return { data, errors };
}
