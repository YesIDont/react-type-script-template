const OFF = 0;
const WARN = 1;
const ERR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: 'tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint', 'import', 'jsx-a11y'],
  rules: {
    indent: [2, 2],
    'class-methods-use-this': [WARN, { exceptMethods: ['isOverlappingWith'] }],
    'jsx-quotes': [WARN, 'prefer-single'],
    'newline-before-return': [WARN],
    'no-console': WARN,
    'no-shadow': WARN,
    'prettier/prettier': WARN,
    'react/jsx-first-prop-new-line': [1, 'multiline-multiprop'],
    'react/jsx-max-props-per-line': [1, { maximum: 2, when: 'multiline' }],

    'jsx-a11y/alt-text': [
      2,
      {
        img: ['ExpertImage'],
      },
    ],

    'import/extensions': [
      ERR,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],

    'prefer-destructuring': [
      WARN,
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],

    // Rules turned off
    '@typescript-eslint/no-non-null-assertion': OFF,
    '@typescript-eslint/no-unused-vars': OFF,
    'arrow-body-style': OFF,
    'function-call-argument-newline': OFF,
    'import/no-extraneous-dependencies': OFF,
    'import/prefer-default-export': OFF,
    'lines-between-class-members': OFF,
    'no-nested-ternary': OFF,
    'no-use-before-define': OFF,
    'react/display-name': OFF,
    'react/jsx-filename-extension': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/prop-types': OFF,
    'react/static-property-placement': OFF,
  },
  ignorePatterns: ['react-app-env.d.ts'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.d.ts', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
};
