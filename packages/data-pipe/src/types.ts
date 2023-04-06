export type ProcessorMetadata = {
  options?: Record<string, any>;
  type?: ProcessorType;
};

export type Processor<Data> = {
  (data: any, options: Processor<Data>["options"] | any): Data;
} & ProcessorMetadata;

export enum ProcessorType {
  ASYNC = "async",
}
