export type TaskMetadata = {
  options?: Record<string, any>;
  type?: TaskType;
};

export type Task<Data> = {
  (data: any, options: Task<Data>["options"] | any): Data;
} & TaskMetadata;

export enum TaskType {
  ASYNC = "async",
}
