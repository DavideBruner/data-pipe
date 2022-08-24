import { ConfigData } from './types';
import { Readable } from 'stream';

export default function readStreamData({ processes, ...config }: ConfigData, options = {}) {
  let data: any = null;
  let errors: any[] = [];
  return new Readable.Stream();
}
