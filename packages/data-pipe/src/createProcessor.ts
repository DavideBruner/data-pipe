import { Processor, ProcessorMetadata } from "./types";

//
export default function createProcessor<Data>(
  processor: Processor<Data>,
  metadata?: ProcessorMetadata
) {
  return Object.assign(processor, metadata);
}
