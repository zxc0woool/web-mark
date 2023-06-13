const { createProxyMiddleware } = require("http-proxy-middleware");

// const BaseUrl = "http://" + COMM.SERVER_IP + ":" + COMM.SERVER_PORT + "/iob-admin/"; // 主机及端口

const BaseUrl = "http://192.168.0.16:8080"; // 主机及端口


module.exports = function (app) {
  app.use(
    createProxyMiddleware("/iob-admin", {
      target: BaseUrl,
      changeOrigin: true,
      pathRewrite: {
        "^/iob-admin": ""
      }
    })
  );
};
