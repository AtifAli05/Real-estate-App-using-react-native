rules: {
  prettier/prettier ['error', {
    endOfLine: 'auto'
  }]
}

module.exports = {
  root: true,
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': ['error', {
      endOfLine: 'auto'
    }]
  },
};