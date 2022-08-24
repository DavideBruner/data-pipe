export default function resolveConfig(config: any, { configFilePath }: any) {
  config.resolve.alias['react-data-pipe-config'] = configFilePath
  return config;
}