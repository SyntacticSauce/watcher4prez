module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    // "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  // "parser": "@typescript-eslint/parser",
  // "extends": [
  //   'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  //   // "typescript/prettier"    
  // ],
  "plugins": [
    "@typescript-eslint/tslint"
  ],
  "parserOptions": {
    "project": "tsconfig.json",
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  rules: {
    complexity: 0,
    // Conditional requires based on process.env.NODE_ENV are a thing.
    'global-require': 'off',
    'max-params': 0,
    'max-statements': 0,
    'no-invalid-this': 0,
    'no-undef': [0, 'never'],
    'no-console': [0, 'never'],
  }
};