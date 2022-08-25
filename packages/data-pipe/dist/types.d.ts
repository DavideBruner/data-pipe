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
export declare enum ProcessorType {
    ASYNC = "async"
}
//# sourceMappingURL=types.d.ts.map