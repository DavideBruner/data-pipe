import { Processor } from "./types";
import { pipeline } from "./utils/pipeline";

export default function lazyReadData<Data>(
  processors: Processor<Data>[],
  options: Processor<Data>["options"] = {}
) {
  const data: { current: Data | null } = { current: null };
  const errors: unknown[] = [];
  const read = (opts: Processor<Data>["options"]) => {
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
