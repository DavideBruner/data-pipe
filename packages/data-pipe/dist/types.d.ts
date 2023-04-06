export declare type ProcessorMetadata = {
    options?: Record<string, any>;
    type?: ProcessorType;
};
export declare type Processor<Data> = {
    (data: any, options: Processor<Data>["options"] | any): Data;
} & ProcessorMetadata;
export declare enum ProcessorType {
    ASYNC = "async"
}
//# sourceMappingURL=types.d.ts.map