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

  app.use(
    '/api/predict',
    createProxyMiddleware({
      target: 'https://asia-northeast3-aiplatform.googleapis.com/v1/projects/50762632220/locations/asia-northeast3/endpoints/5218607640866717696:predict',
      changeOrigin: true,
    })

  );
};