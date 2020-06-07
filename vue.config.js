const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@static', resolve('../../static'))
      .set('@views', resolve('./src/views'))
      .set('@router', resolve('./src/router'))
      .set('@store', resolve('./src/store'))
      .set('@utils', resolve('./src/utils'))
      .set('@api', resolve('./src/api'))
  }
}
