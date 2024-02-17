const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/safeguardian',
    createProxyMiddleware({
      target: 'http://34.64.87.200:8000',
      changeOrigin: true,
    })

  );
};