module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ts',
          '.ios.ts',
          '.android.ts',
          '.tsx',
          '.ios.tsx',
          '.android.tsx',
          '.js',
          '.jsx',
          '.json',
        ],
        alias: {
          '@app': './src',
        },
      },
    ],
  ],
};
