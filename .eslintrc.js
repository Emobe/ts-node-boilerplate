module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier/@typescript-eslint'],
  parserOptions: {
    ecmaVersion: es2022,
    sourceType: 'module'
  }
};
