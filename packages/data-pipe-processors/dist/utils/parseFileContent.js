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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const gray_matter_1 = __importDefault(require("gray-matter"));
/**/
function parseFileContent({ fileName, fileExt, filePath }, options) {
    const fileContents = (0, fs_1.readFileSync)(filePath, 'utf8');
    // Remove the .ext from file name to get id
    const id = (0, path_1.basename)(fileName, fileExt);
    // Use gray-matter to parse the post metadata section
    const _a = (0, gray_matter_1.default)(fileContents, options === null || options === void 0 ? void 0 : options.parser), { orig, data } = _a, rest = __rest(_a, ["orig", "data"]);
    // Combine the data with the id
    return Object.assign(Object.assign({ id }, data), rest);
}
exports.default = parseFileContent;
