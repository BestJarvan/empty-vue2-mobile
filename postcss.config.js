module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // options
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/App.vue/],
      include: undefined
    }
  }
}
