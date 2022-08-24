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
const data_pipe_config_1 = __importDefault(require("data-pipe-config"));
function getConfig(name) {
    //@todo allow the end user to use a config object instead of linking to a file
    if (!data_pipe_config_1.default) {
        throw new Error(`No config file found`);
    }
    if (!(data_pipe_config_1.default === null || data_pipe_config_1.default === void 0 ? void 0 : data_pipe_config_1.default.data)) {
        throw new Error(`No data found in the config file`);
    }
    if (!(data_pipe_config_1.default === null || data_pipe_config_1.default === void 0 ? void 0 : data_pipe_config_1.default.data[name])) {
        throw new Error(`The data.${name} is not defined in the config file`);
    }
    const _a = data_pipe_config_1.default.data[name], { processors } = _a, rest = __rest(_a, ["processors"]);
    if (!processors) {
        throw new Error(`The data.${name} has not .processors`);
    }
    return Object.assign(Object.assign({}, rest), { processors });
}
exports.default = getConfig;
