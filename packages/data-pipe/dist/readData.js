"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipeline_1 = require("./utils/pipeline");
function readData(processors, options = {}) {
    // @todo implement a caching mechanism
    let data = null;
    const errors = [];
    try {
        data = (0, pipeline_1.pipeline)(processors, options);
        /* eslint-disable  @typescript-eslint/no-explicit-any */
    }
    catch (e) {
        errors.push(e.message);
    }
    return { data, errors };
}
exports.default = readData;
