import { ConfigData } from './types';
import { asyncPipeline } from './utils/pipeline';

export default async function readAsyncData({ processors, ...config }: ConfigData, options = {}) {
  let data: any = null;
  let errors: any[] = [];
  try {
    data = await asyncPipeline(processors, config, options);
  } catch(e: any) {
    errors.push(e.message);
  }
  return { data, errors };
}
