const driverPlugin =
  process.env.GROMMET_DRIVER === 'emotion'
    ? ['babel-plugin-emotion']
    : ['styled-components', { useDisplayName: false }];

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-logical-assignment-operators',
    ['@babel/plugin-proposal-optional-chaining', { loose: false }],
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
    '@babel/plugin-proposal-do-expressions',
    driverPlugin,
    [
      'transform-imports',
      {
        'grommet-icons/contexts': {
          // eslint-disable-next-line no-template-curly-in-string
          transform: 'grommet-icons/es6/contexts/${member}',
          preventFullImport: true,
          skipDefaultConversion: true,
        },
      },
    ],
  ],
};
