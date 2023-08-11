const backendService = require("../service/backend.service")

class backendController {
    //请求数据列表
    async applicationTable (ctx, next) {
        const { offset, size } = ctx.request.query
        const result = await backendService.queryApplicationTable(offset, size)
        const result1 = await backendService.queryApplicationTableAll()
        // 返回数据
        ctx.body = {
            code: 0,
            data: result,
            length: result1.length

        }
    }
    async interviewTable (ctx, next) {
        const { offset, size } = ctx.request.query
        const result = await backendService.queryinterviewTable(offset, size)
        const result1 = await backendService.queryinterviewTableAll()
        // 返回数据
        ctx.body = {
            code: 0,
            data: result,
            length: result1.length
        }
    }
    //评论
    async operateComment (ctx, next) {
        const { main_name, operate_itw_name, operate_itw_time, operate_itw_result, operate_itw_suggest } = ctx.request.body
        const result = await backendService.operateComment(main_name, operate_itw_name, operate_itw_time, operate_itw_result, operate_itw_suggest)
        ctx.body = {
            code: 0,
            data: result
        }
    }
    async researchComment (ctx, next) {
        const { main_name, research_itw_name, research_itw_time, research_itw_write_result, research_itw_result, research_itw_suggestion } = ctx.request.body
        const result = await backendService.researchComment(main_name, research_itw_name, research_itw_time, research_itw_write_result, research_itw_result, research_itw_suggestion)
        ctx.body = {
            code: 0,
            data: result
        }
    }
    async marketComment (ctx, next) {
        const { main_name, market_itw_name, market_itw_time, market_itw_result, market_itw_suggest } = ctx.request.body
        const result = await backendService.marketComment(main_name, market_itw_name, market_itw_time, market_itw_result, market_itw_suggest)
        ctx.body = {
            code: 0,
            data: result
        }
    }
    async detailsData (ctx, next) {
        const { name } = ctx.request.query
        const result = await backendService.detailsData(name)
        ctx.body = {
            code: 0,
            data: result
        }
    }
    //最终结果
    async finallyResult (ctx, next) {
        const { finallyResult, name } = ctx.request.body
        await backendService.finallyResult(finallyResult, name)
        ctx.body = {
            code: 0
        }

    }
}
module.exports = new backendController();