const MappedPath = require('jest-module-name-mapper')('./tsconfig.json');

module.exports = {
  rootDir: '../../',
  moduleNameMapper: MappedPath,
  setupFiles: ['./config/test/enzymeConfig'],
  setupFilesAfterEnv: ['./config/test/jestSetupFramework'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
