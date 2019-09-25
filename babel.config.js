module.exports = {
  env: {
    production: {
      ignore: ['src/**/*.test.js'],
      presets: ['minify'],
    },
  },
  presets: ['@babel/preset-env'],
  ignore: ['src/fixures'],
}
