const Router = require('@koa/router');
const H5Controller = require("../controller/h5.controller.js")

const h5Router = new Router({ prefix: '/h5' });

h5Router.post("/", H5Controller.Insert)





//导出路由
module.exports = h5Router;
