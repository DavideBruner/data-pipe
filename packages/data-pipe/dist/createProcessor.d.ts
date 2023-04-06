import { Processor, ProcessorMetadata } from "./types";
export default function createProcessor<Data>(processor: Processor<Data>, metadata?: ProcessorMetadata): ((data: any, options: any) => Data) & ProcessorMetadata;
//# sourceMappingURL=createProcessor.d.ts.map