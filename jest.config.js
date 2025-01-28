/** @type{import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.(svg)$': '<rootDir>/tests/__mocks__/svg.ts'
  },
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          baseUrl: '.',
          parser: {
            syntax: 'typescript'
          },
          transform: {
            react: {
              runtime: 'automatic'
            }
          },

          paths: {
            '#/*': ['./src/*']
          }
        }
      }
    ]
  }
}

export default config
