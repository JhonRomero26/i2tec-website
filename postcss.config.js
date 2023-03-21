module.exports = {
  plugins: {
    autoprefixer: {},
    '@csstools/postcss-global-data': {
      files: ['./postcssConfigs/breakpoints.css'],
    },
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 2,
      features: {
        'custom-properties': {
          preserve: false,
        },
      },
    },
  },
}
