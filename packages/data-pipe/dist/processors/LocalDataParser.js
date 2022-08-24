"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const file_1 = require("../utils/file");
/* */
function LocalDataParser(data, { source }, options) {
    if (!source) {
        throw new Error(`No .source defined in the options`);
    }
    const fileNames = (0, fs_1.readdirSync)(source);
    // Iterate over each file and parse the content
    return fileNames.reduce((list, fileName) => {
        const fileExt = (0, path_1.extname)(fileName);
        const filePath = (0, path_1.join)(source, fileName);
        // Check if the parser supports the file extension
        const allowedExtensions = ['.md', '.mdx', '.json'];
        if (!allowedExtensions.includes(fileExt)) {
            throw new Error(`The extension ${fileExt} is not allowed`);
        }
        const data = (0, file_1.parseFileContent)({ fileName, fileExt, filePath }, options);
        // Let's use a key to index the data, this can come handy in operations like filtering or searching
        const key = (options === null || options === void 0 ? void 0 : options.dataKey) && data[options === null || options === void 0 ? void 0 : options.dataKey] ? data[options === null || options === void 0 ? void 0 : options.dataKey] : data.id;
        const dataByKey = list[key] ? (Array.isArray(list[key]) ? [...list[key], data] : [list[key], data]) : data;
        return Object.assign(Object.assign({}, list), { [key]: dataByKey });
    }, data);
}
exports.default = LocalDataParser;
