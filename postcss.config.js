module.exports = {
  plugins: {
    autoprefixer: {},
    '@csstools/postcss-global-data': {
      files: [
        './postcssConfigs/breakpoints.css',
        './postcssConfigs/containers.css',
      ],
    },
    'postcss-preset-env': {
      stage: 2,
      features: {
        'custom-properties': {
          preserve: false,
        },
      },
    },
    'postcss-nested': {},
    'postcss-pxtorem': {},
    'postcss-advanced-variables': {},
    // 'postcss-viewport-height-correction': {},
    'postcss-extend-rule': {},
  },
}
