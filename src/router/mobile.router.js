const Router = require('@koa/router');
const mobileController = require("../controller/mobile.controller.js")

const mobileRouter = new Router({ prefix: '/mobile' });

mobileRouter.post("/", mobileController.Insert)





//导出路由
module.exports = mobileRouter;
