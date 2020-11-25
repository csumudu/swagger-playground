const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/v1.0/**', {
      target: 'http://localhost:5000',
      changeOrigin: true,
      secure: false,
    }),
  );
};
