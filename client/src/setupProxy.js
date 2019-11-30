const proxy = require('http-proxy-middleware');

module.exports = (app)=>{
  //app.use(proxy('/api/users/*', { target: 'http://localhost:5020',  changeOrigin: true}));
  app.use(
  proxy("/api/users", {
    target: "http://localhost:5020",
    changeOrigin: true,
    onProxyReq(proxyReq) {
      if (proxyReq.getHeader("origin")) {
        proxyReq.setHeader("origin", "http://localhost:5020")
      }
    },
    pathRewrite: { "^/api/users": "" },
    logLevel: "debug",
  })
)
};
