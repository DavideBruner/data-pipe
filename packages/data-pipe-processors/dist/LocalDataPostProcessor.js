"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LocalDataPostProcessor(data, config, options) {
    // @TODO Needs another tought on how filter and sort out data before return it
    if (options.loadByKey)
        return data[options.loadByKey];
    data = options.filterBy ? Object.fromEntries(Object.entries(data).filter(options.filterBy)) : data;
    data = options.sortBy ? Object.fromEntries(Object.entries(data).sort(options.sortBy)) : data;
    return options.keepKeys ? data : Object.values(data);
}
exports.default = LocalDataPostProcessor;
