import { Config } from "../types";

const pipeline = (fns: any[], config: Config, options: any) => fns.reduce((v, f) => f(v, config, { ...f.options, ...options }), []);
const asyncPipeline = (fns: any[], config: Config, options: any) => fns.reduce(async (v, f) => await f(await v, config, { ...f.options, ...options }), []);

export {
  pipeline,
  asyncPipeline
}