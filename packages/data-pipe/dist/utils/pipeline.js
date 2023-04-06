"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncPipeline = exports.pipeline = void 0;
function pipeline(fns, options, initialData = null) {
    return fns.reduce((v, f) => f(v, Object.assign(Object.assign({}, f.options), options)), initialData);
}
exports.pipeline = pipeline;
// @todo fix this
/* eslint-disable  @typescript-eslint/no-explicit-any */
function asyncPipeline(fns, options, initialData = null) {
    return fns.reduce((v, f) => __awaiter(this, void 0, void 0, function* () { return yield f(yield v, Object.assign(Object.assign({}, f.options), options)); }), initialData);
}
exports.asyncPipeline = asyncPipeline;
