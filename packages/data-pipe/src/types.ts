export interface Processor {
  options?: any;
  type?: ProcessorType;
  [key: string]: any;
}

export interface ConfigData {
  processors: Processor[];
  [key: string]: any;
}

export interface Config {
  [key: string]: ConfigData;
}

export enum ProcessorType {
  ASYNC = 'async',
}