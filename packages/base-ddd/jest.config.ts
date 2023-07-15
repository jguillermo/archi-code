/* eslint-disable */
import { JestCoverage } from '../../jest.coverage';

export default {
  displayName: 'base-ddd',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/base-ddd',
  ...JestCoverage,
};
