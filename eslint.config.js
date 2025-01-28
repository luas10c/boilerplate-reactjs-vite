import { defineConfig, globalIgnores } from 'eslint/config'

import globals from 'globals'

import js from '@eslint/js'

import ts from 'typescript-eslint'

import prettier from 'eslint-plugin-prettier'

import react from 'eslint-plugin-react'
import a11y from 'eslint-plugin-jsx-a11y'
import refresh from 'eslint-plugin-react-refresh'

import jest from 'eslint-plugin-jest'
import tl from 'eslint-plugin-testing-library'

export default defineConfig([
  globalIgnores(['node_modules', 'dist', 'build', 'coverage']),
  js.configs.recommended,
  ts.configs.recommended,
  refresh.configs.recommended,
  a11y.flatConfigs.recommended,
  {
    name: 'react/recommended',
    plugins: {
      react
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        React: true,
        JSX: true
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...react.configs.recommended.rules
    }
  },
  {
    name: 'prettier/recommended',
    plugins: {
      prettier
    },
    rules: {
      ...prettier.configs.recommended.rules
    }
  },
  {
    name: 'jest/recommended',
    files: ['**/*.{test|spec}.ts?(x)'],
    ...jest.configs['flat/recommended']
  },
  {
    name: 'testing-library/recommended',
    files: ['**/*.{test|spec}.ts?(x)'],
    ...tl.configs['flat/react']
  }
])
