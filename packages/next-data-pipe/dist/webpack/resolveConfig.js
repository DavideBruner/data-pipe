"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function resolveConfig(config, { configFilePath }) {
    config.resolve.alias['react-data-pipe-config'] = configFilePath;
    return config;
}
exports.default = resolveConfig;
