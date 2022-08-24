import { readdirSync } from "fs";
import { extname, join } from "path";

import { ConfigData } from "../types";
import { parseFileContent } from "../utils/file";


/* */
function LocalDataParser(
  data: any, { source }: ConfigData, { dataKey, ...options }: any
) {
  if (!source) {
    throw new Error(`The data.${name} has not .source`);
  }

  const fileNames = readdirSync(source);
  // Iterate over each file and parse the content
  return fileNames.reduce((list: any[], fileName: string) => {
    
    const fileExt = extname(fileName);
    const filePath = join(source, fileName);
    
    // Check if the parser supports the file extension
    const allowedExtensions = ['.md', '.mdx', '.json'];
    if(!allowedExtensions.includes(fileExt)) {
      throw new Error(`The extension ${fileExt} is not allowed`);
    }

    const data = parseFileContent({ fileName, fileExt, filePath }, options);
    // Let's use a key to index the data, this can come handy in operations like filtering or searching
    const key = dataKey && data[dataKey] ? data[dataKey] : data.id;
    const dataByKey = list[key] ? (
      Array.isArray(list[key]) ? [...list[key], data] : [list[key], data]
    ) : data;
    
    return {  ...list, [key] : dataByKey };
  }, data)
}

export default LocalDataParser;