/** @type{import('prettier').Config}*/
const config = {
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  semi: false,
  printWidth: 80,
  quoteProps: 'consistent',
  proseWrap: 'preserve',
  arrowParens: 'always',
  bracketSameLine: false,
  endOfLine: 'lf',
  singleAttributePerLine: false,
  jsxSingleQuote: false,
  useTabs: false,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss']
}

export default config
