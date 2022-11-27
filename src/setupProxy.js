const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://192.168.31.49:8000",
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        "^/api": "/api",
      },
    })
  );
};
