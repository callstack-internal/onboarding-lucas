module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          features: './src/features',
          assets: './src/assets',
          hooks: './src/hooks',
          api: './src/api',
          queries: './src/queries',
        },
      },
    ],
  ],
};
