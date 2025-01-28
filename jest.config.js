/** @type{import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^#(.+)': '<rootDir>/src/$1',
    '^.+\\.(svg)$': '<rootDir>/tests/__mocks__/svg.ts'
  },
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  }
}

export default config
