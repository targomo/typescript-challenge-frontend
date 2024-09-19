module.exports = {
  preset: 'jest-preset-angular',
  verbose: false,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/?(*.)(spec).(ts|js)?(x)'],
  setupFilesAfterEnv: ['jest-canvas-mock', '<rootDir>/jestSetupAfterEnv.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  collectCoverageFrom: ['src/**/*.{ts,js}', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['<rootDir>/src/main.ts', '.mock.ts'],
}
