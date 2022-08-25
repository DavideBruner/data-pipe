import { ConfigData } from './types';
import readData from './readData';

export default function lazyReadData({ processors, ...config }: ConfigData, options = {}) {
  let data: any = { current: null };
  let errors: any[] = [];
  const read = (opts: any) => {
    try {
      data.current = readData({ processors, ...config }, { ...options, ...opts });
    } catch(e: any) {
      errors.push(e.message);
    }
  }
  return [{ data, errors }, read];
}