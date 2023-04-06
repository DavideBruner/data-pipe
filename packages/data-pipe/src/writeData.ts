import { Processor } from "./types";
import { pipeline } from "./utils/pipeline";

export default function writeData<T>(
  initialData: T,
  processors: Processor<T>[],
  options: Processor<T>["options"] = {}
) {
  const errors: unknown[] = [];
  let data = null;

  try {
    data = pipeline<T>(processors, options, initialData);
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } catch (e: any) {
    errors.push(e.message);
  }

  return { data, errors };
}
