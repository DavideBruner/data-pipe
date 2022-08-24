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
const readData_1 = __importDefault(require("./readData"));
function lazyReadData(_a, options) {
    var { processors } = _a, config = __rest(_a, ["processors"]);
    if (options === void 0) { options = {}; }
    let data = { current: null };
    let errors = [];
    return [{ data, errors }, (opts) => {
            try {
                data.current = (0, readData_1.default)(Object.assign({ processors }, config), Object.assign(Object.assign({}, options), opts));
            }
            catch (e) {
                errors.push(e.message);
            }
        }];
}
exports.default = lazyReadData;
