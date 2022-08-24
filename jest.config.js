const path = require('path');
const { lstatSync, readdirSync } = require('fs');
const basePath = path.resolve(__dirname, 'packages');
const packages = readdirSync(basePath).filter(name => {
  return lstatSync(path.join(basePath, name)).isDirectory();
});

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    ...packages.reduce((acc, name) => ({
      ...acc,
      [`@ahoopen/${name}(.*)$`]:
      `<rootDir>/packages/./${name}/src/$1`,
    }), {}),
  },
};