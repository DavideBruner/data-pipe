import { Task, TaskMetadata } from "./types";

//
export default function createTask<Data>(
  processor: Task<Data>,
  metadata?: TaskMetadata
) {
  return Object.assign(processor, metadata);
}
