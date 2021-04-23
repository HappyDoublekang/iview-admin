module.exports = {
  lintOnSave: true,
  devServer: {
    port: 8888, // 端口
    proxy: {
      '/api': {
        // target: "http://www.medciot.com:1888", //服务器
        target: 'http://192.168.4.49:9900', // 服务器
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false
}
