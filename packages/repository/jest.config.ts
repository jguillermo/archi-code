/* eslint-disable */
import {JestCoverage} from "../../jest.coverage";

export default {
  displayName: 'repository',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/repository',
  ...JestCoverage,
};
