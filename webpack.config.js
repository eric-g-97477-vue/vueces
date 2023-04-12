module.exports = function (webpackEnv) {
  return {
    resolve: {
      fallback: {
        url: false,
        zlib: false,
        https: false,
        http: false,
      }
    }
  }
}