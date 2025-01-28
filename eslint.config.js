import globals from 'globals'

import js from '@eslint/js'

import ts from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

import prettier from 'eslint-plugin-prettier'

import react from 'eslint-plugin-react'
import a11y from 'eslint-plugin-jsx-a11y'
import refresh from 'eslint-plugin-react-refresh'
//import tailwindcss from 'eslint-plugin-tailwindcss'

/** @type{import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: ['node_modules', 'dist'],
    plugins: {
      '@typescript-eslint': ts,
      prettier,
      react,
      'jsx-a11y': a11y,
      'react-refresh': refresh
      //tailwindcss
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      parser,
      globals: {
        ...globals.es2022,
        ...globals.node,
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
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...a11y.configs.recommended.rules,
      ...refresh.configs.recommended.rules
      //...tailwindcss.configs.recommended.rules
    }
  }
]

export default config
