import { Task } from "./types";
import { pipeline } from "./utils/pipeline";

export default function runLazy<Data>(
  processors: Task<Data>[],
  options: Task<Data>["options"] = {}
) {
  const data: { current: Data | null } = { current: null };
  const errors: unknown[] = [];
  const read = (opts: Task<Data>["options"]) => {
    try {
      data.current = pipeline<Data>(processors, {
        ...options,
        ...opts,
      });
      /* eslint-disable  @typescript-eslint/no-explicit-any */
    } catch (e: any) {
      errors.push(e.message);
    }
  };
  return [{ data, errors }, read];
}
