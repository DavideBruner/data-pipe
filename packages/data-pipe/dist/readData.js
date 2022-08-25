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
const pipeline_1 = require("./utils/pipeline");
function readData(_a, options) {
    var { processors } = _a, config = __rest(_a, ["processors"]);
    if (options === void 0) { options = {}; }
    // @todo implement a caching mechanism
    let data = null;
    let errors = [];
    try {
        data = (0, pipeline_1.pipeline)(processors, config, options);
    }
    catch (e) {
        errors.push(e.message);
    }
    return { data, errors };
}
exports.default = readData;
