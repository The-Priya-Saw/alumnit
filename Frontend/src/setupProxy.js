const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
    app.use(
        createProxyMiddleware('/backend', {
          target: 'http://localhost:3001', // API endpoint 1
          changeOrigin: true,
          pathRewrite: {
            "^/api1": "",
          },
          headers: {
            Connection: "keep-alive"
          }
        })
      );
      app.use(
        createProxyMiddleware('/scrape', {
          target: 'http://localhost:3002', // API endpoint 1
          changeOrigin: true,
          pathRewrite: {
            "^/api1": "",
          },
          headers: {
            Connection: "keep-alive"
          }
        })
      );
}