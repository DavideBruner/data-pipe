import config from 'data-pipe-config';
import { ConfigData } from 'data-pipe';

export default function getConfig(name: string): ConfigData {
  //@todo allow the end user to use a config object instead of linking to a file
  if (!config) {
    throw new Error(`No config file found`);
  }

  if (!config?.data) {
    throw new Error(`No data found in the config file`);
  }

  if (!config?.data[name]) {
    throw new Error(`The data.${name} is not defined in the config file`);
  }

  const { processors, ...rest } = config.data[name];

  if (!processors) {
    throw new Error(`The data.${name} has not .processors`);
  }

  return {
    ...rest,
    processors,
  }
}