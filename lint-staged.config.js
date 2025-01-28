const config = {
  '**/*.{ts,tsx}': [
    'eslint . --ignore-pattern "node_modules" --ignore-pattern "dist" --config eslint.config.js'
  ]
}

export default config
