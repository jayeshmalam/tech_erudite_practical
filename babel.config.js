module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@features': './src/features',
          '@theme': './src/theme',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@store': './src/store',
          '@types': './src/types',
        },
      },
    ],
  ],
};