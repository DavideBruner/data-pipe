export declare type TaskMetadata = {
    options?: Record<string, any>;
    type?: TaskType;
};
export declare type Task<Data> = {
    (data: any, options: Task<Data>["options"] | any): Data;
} & TaskMetadata;
export declare enum TaskType {
    ASYNC = "async"
}
//# sourceMappingURL=types.d.ts.map