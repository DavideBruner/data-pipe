"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipeline_1 = require("./utils/pipeline");
function lazyReadData(processors, options = {}) {
    const data = { current: null };
    const errors = [];
    const read = (opts) => {
        try {
            data.current = (0, pipeline_1.pipeline)(processors, Object.assign(Object.assign({}, options), opts));
            /* eslint-disable  @typescript-eslint/no-explicit-any */
        }
        catch (e) {
            errors.push(e.message);
        }
    };
    return [{ data, errors }, read];
}
exports.default = lazyReadData;
