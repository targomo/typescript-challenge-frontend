module.exports = {
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/style.mock.js',
    'mapbox-gl': '<rootDir>/__mocks__/mapbox-gl.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/jestSetupAfterEnv.ts'],
  moduleDirectories: ['node_modules', 'src'],
  verbose: false,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/?(*.)(spec).(ts|js)?(x)'],
  testPathIgnorePatterns: ['./node_modules/'],
}
