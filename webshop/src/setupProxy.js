const { createProxyMiddleware } = require("http-proxy-middleware");
const proxy = require('http-proxy-middleware');

// http://localhost:3000/.netlify/functions/products-create 
// http://localhost:3000/functions/products-create
module.exports = function (app) {

  /*
"proxy": {
    "/.netlify/functions": {
      "target": "http://localhost:9000",
      "pathRewrite": {
        "^/\\.netlify/functions": ""
      }
    }
  }
  */
  app.use(
    createProxyMiddleware("/.netlify/functions/", { 
      target: "http://localhost:9000",
      pathRewrite: {
        "^/\\.netlify/functions": "",
      }
    })
  );
};

// const options = {
//   target: 'http://localhost:3000',
//   pathRewrite: {
//     '^/.netlify/functions': '/functions/', // rewrite path
//   },
// };

// const apiProxy = createProxyMiddleware('/.netlify/functions', options)