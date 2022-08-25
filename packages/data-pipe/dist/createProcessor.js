"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 
function createProcessor(fn, metadata) {
    return Object.assign(fn, metadata);
}
exports.default = createProcessor;
