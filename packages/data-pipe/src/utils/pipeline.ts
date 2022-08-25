const pipeline = (fns: any[], ...options: any) => fns.reduce((v, f) => f(v, ...options), []);
const asyncPipeline = (fns: any[], ...options: any) => fns.reduce(async (v, f) => await f(v, ...options), []);

export {
    pipeline,
    asyncPipeline
}