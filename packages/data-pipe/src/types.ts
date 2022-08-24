export interface Processor {
  sourceType?: SourceType;
  [key: string]: any;
}

export interface ConfigData {
  processors: Processor[];
  [key: string]: any;
}

export interface Config {
  data: {
    [key: string]: ConfigData;
  }
}

export enum SourceType {
  LOCAL = 'local',
  REMOTE = 'remote',
}