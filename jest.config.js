module.exports = {
  preset: 'jest-preset-angular',
  verbose: false,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/?(*.)(spec).(ts|js)?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jestSetupAfterEnv.ts'],
  setupFiles: ['jest-webgl-canvas-mock'],
  moduleDirectories: ['node_modules', '.'],
  collectCoverageFrom: ['src/**/*.{ts,js}', '!**/node_modules/**'],
  coveragePathIgnorePatterns: [
    '.module.ts',
    '<rootDir>/src/main.ts',
    '<rootDir>/src/polyfills.ts',
    '<rootDir>/src/mocks',
    '.mock.ts',
  ],
}
