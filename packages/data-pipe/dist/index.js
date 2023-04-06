"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lazyReadData = exports.readData = exports.readAsyncData = exports.createProcessor = void 0;
const readData_1 = __importDefault(require("./readData"));
exports.readData = readData_1.default;
const lazyReadData_1 = __importDefault(require("./lazyReadData"));
exports.lazyReadData = lazyReadData_1.default;
const readAsyncData_1 = __importDefault(require("./readAsyncData"));
exports.readAsyncData = readAsyncData_1.default;
const createProcessor_1 = __importDefault(require("./createProcessor"));
exports.createProcessor = createProcessor_1.default;
__exportStar(require("./types"), exports);
