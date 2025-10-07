import js from '@eslint/js'
import globals, { browser } from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import { version } from 'react'

module.exports = {
  root:true,
  env: { browser: true, es2020: true},
  extends: [
    'es.lint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ], 
  ignorePatterns: ['dist','.eslintrc.cjs', 'src'],
    parserOptions: {ecmaVersion: 'latest', SourceType: 'module'},
    settings: {react: {version: '18.2'}},
  plugins: ['react-refresh'],
  rules: {

    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport : true },
    ],
  },
}
