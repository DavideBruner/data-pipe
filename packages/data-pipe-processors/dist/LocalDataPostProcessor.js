"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LocalDataPostProcessor(data, _config, options) {
    // @TODO Needs another tought on how filter and sort out data before return it
    if (options === null || options === void 0 ? void 0 : options.loadByKey)
        return data[options === null || options === void 0 ? void 0 : options.loadByKey];
    data = (options === null || options === void 0 ? void 0 : options.filterBy)
        ? Object.fromEntries(Object.entries(data).filter(options.filterBy))
        : data;
    data = (options === null || options === void 0 ? void 0 : options.sortBy)
        ? Object.fromEntries(Object.entries(data).sort(options.sortBy))
        : data;
    return (options === null || options === void 0 ? void 0 : options.keepKeys) ? data : Object.values(data);
}
exports.default = LocalDataPostProcessor;
