module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 3,
      features: {
        'color-mod-function': {
          unresolved: 'warn',
        },
      },
      'nesting-rules': true,
      preserve: true,
    },
    'postcss-import': {
      skipDuplicates: true,
    },
    'postcss-nested': {},
    cssnano: {
      preset: 'default',
    },
  },
};
