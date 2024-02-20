const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/safeguardian',
    createProxyMiddleware({
      target: 'http://34.64.87.200:8000',
      changeOrigin: true,
    })

  );

  app.use(
    '/main/generate',
    createProxyMiddleware({
      target: 'http://34.47.73.61:8000',
      changeOrigin: true,
    })

  );
};