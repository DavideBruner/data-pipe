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
exports.run = exports.runLazy = exports.runSync = exports.runAsync = exports.createTask = void 0;
const runSync_1 = __importDefault(require("./runSync"));
exports.runSync = runSync_1.default;
const runLazy_1 = __importDefault(require("./runLazy"));
exports.runLazy = runLazy_1.default;
const runAsync_1 = __importDefault(require("./runAsync"));
exports.runAsync = runAsync_1.default;
exports.run = runAsync_1.default;
const createTask_1 = __importDefault(require("./createTask"));
exports.createTask = createTask_1.default;
__exportStar(require("./types"), exports);
