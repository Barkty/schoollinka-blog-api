/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/**/*.test.ts"],
  verbose: true,
  forceExit: true,
  rootDir: 'src',
  setupFilesAfterEnv: ["<rootDir>/tests/setupAfterEnv.ts"],
  // globalSetup: "<rootDir>/tests/setup.ts",
  // globalTeardown: "<rootDir>/tests/teardown.ts",
  // clearMocks: true
};