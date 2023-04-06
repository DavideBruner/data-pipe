export default {
  preset: "ts-jest",
  clearMocks: true,
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  testPathIgnorePatterns: ["<rootDir>/packages/(?:.+?)/dist"],
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json"],
  verbose: true,
};
