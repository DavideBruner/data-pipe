"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (fns, ...options) => fns.reduce((v, f) => f(v, ...options), []);
