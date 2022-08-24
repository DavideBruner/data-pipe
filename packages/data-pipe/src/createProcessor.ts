// 
export default function createProcessor(fn: any, metadata?: any) {
  return Object.assign(fn, metadata);
}