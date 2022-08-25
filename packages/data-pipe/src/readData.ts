import { ConfigData } from './types';
import { pipeline } from './utils/pipeline';

export default function readData({ processors, ...config }: ConfigData, options = {}) {
  // @todo implement a caching mechanism
  let data: any = null;
  let errors: any[] = [];

  try {
    data = pipeline(processors, config, options);
  } catch(e: any) {
    errors.push(e.message);
  }

  return { data, errors };
}
