"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const file_1 = require("../utils/file");
/* */
function LocalDataParser(data, { source }, _a) {
    var { dataKey } = _a, options = __rest(_a, ["dataKey"]);
    if (!source) {
        throw new Error(`The data.${name} has not .source`);
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
        const key = dataKey && data[dataKey] ? data[dataKey] : data.id;
        const dataByKey = list[key] ? (Array.isArray(list[key]) ? [...list[key], data] : [list[key], data]) : data;
        return Object.assign(Object.assign({}, list), { [key]: dataByKey });
    }, data);
}
exports.default = LocalDataParser;
