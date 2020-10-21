const path = require('path');
const webpack = require('webpack');

const grommetDriver = new webpack.EnvironmentPlugin({
  GROMMET_DRIVER: process.env.GROMMET_DRIVER,
});

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.stories\.js$|(\/|\\)stories(\/|\\).*\.js$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          prettierConfig: {
            parser: 'babel',
          },
        },
      },
    ],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /stories(\\|\/).*\.(ts|tsx)$/,
    loaders: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: './tsconfig.json',
        },
      },
      {
        loader: require.resolve('@storybook/source-loader'),
      },
    ],
  });

  // eslint-disable-next-line no-param-reassign
  config.resolve.alias.grommet = path.resolve(__dirname, '../src/js');

  config.plugins.push(grommetDriver);

  return config;
};
