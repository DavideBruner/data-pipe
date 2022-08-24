"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (fns, ...options) => fns.reduce((v, f) => f(v, Object.assign(Object.assign({}, options), f === null || f === void 0 ? void 0 : f.options)), []);
