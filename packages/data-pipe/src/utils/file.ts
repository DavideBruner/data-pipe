import { readFileSync } from "fs";
import { basename } from "path";
import matter from 'gray-matter';

/**/
export function parseFileContent(
  { fileName, fileExt, filePath }: any,
  options: any
): { [key: string]: any } {
  const fileContents = readFileSync(filePath, 'utf8');
  // Remove the .ext from file name to get id
  const id = basename(fileName, fileExt);
  // Use gray-matter to parse the post metadata section
  const { orig, data, ...rest } = matter(fileContents, options?.parser);
  // Combine the data with the id
  return { id, ...data, ...rest };
}