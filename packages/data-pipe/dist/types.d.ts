export interface Processor {
    sourceType?: SourceType;
    [key: string]: any;
}
export interface ConfigData {
    processors: Processor[];
    [key: string]: any;
}
export interface Config {
    [key: string]: ConfigData;
}
export declare enum SourceType {
    LOCAL = "local",
    REMOTE = "remote"
}
//# sourceMappingURL=types.d.ts.map