const Router = require('@koa/router');
const backendController = require("../controller/backend.controller.js")

const backendRouter = new Router({ prefix: '/backend' });

backendRouter.get("/application/tableData", backendController.applicationTable)
backendRouter.get("/interview/tableData", backendController.interviewTable)
backendRouter.post("/interview/operate", backendController.operateComment)
backendRouter.post("/interview/research", backendController.researchComment)
backendRouter.post("/interview/market", backendController.marketComment)
backendRouter.get("/application/detailsData", backendController.detailsData)
backendRouter.post("/finallyResult", backendController.finallyResult)

//导出路由
module.exports = backendRouter;
