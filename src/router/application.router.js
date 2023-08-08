const Router = require('@koa/router');
const ApplicationController = require("../controller/application.controller.js")
const userRouter = new Router({ prefix: '/application' });


userRouter.post("/main", ApplicationController.Insert)


//导出路由
module.exports = userRouter;
