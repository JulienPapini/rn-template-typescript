module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['simple-import-sort', 'import', 'module-resolver'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'sort-imports': 'off',
    'import/order': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/prefer-default-export': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^@app(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.styles$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'module-resolver/use-alias': [
      'error',
      {
        ignoreDepth: 2,
        allowDepthMoreOrLessThanEquality: true,
      },
    ],
  },
};
