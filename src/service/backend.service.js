const connection = require("../app/database")

class backendService {
    //请求数据列表
    async queryApplicationTable (offset = 0, size = 10) {
        const statement = `SELECT * FROM application_table_info LIMIT ? OFFSET ?;`
        const [result] = await connection.execute(statement, [String(size), String(offset)])
        return result
    }
    async queryApplicationTableAll () {
        const statement = `SELECT * FROM application_table_info`
        const [result] = await connection.execute(statement)
        return result
    }
    async queryinterviewTable (offset = 0, size = 10) {
        const statement = `SELECT * FROM interview_table_info LIMIT ? OFFSET ?;`
        const [result] = await connection.execute(statement, [String(size), String(offset)])
        return result
    }
    async queryinterviewTableAll () {
        const statement = `SELECT * FROM interview_table_info`
        const [result] = await connection.execute(statement)
        return result
    }
    //评论
    async operateComment (main_name, operate_itw_name, operate_itw_time, operate_itw_result, operate_itw_suggest) {
        if (operate_itw_time == "Invalid Date") {
            operate_itw_time = "未选择时间"
        }
        const statement = `INSERT INTO operate_itw_info (main_name, operate_itw_name, operate_itw_time, operate_itw_result, operate_itw_suggest) VALUES (?,?,?,?,?)`
        const [result] = await connection.execute(statement, [main_name, operate_itw_name, operate_itw_time, operate_itw_result, operate_itw_suggest])

        const statement3 = `UPDATE all_info SET operate_itw_name=?,operate_itw_time=?,operate_itw_result=?,operate_itw_suggest=? WHERE cn_name=?`
        await connection.execute(statement3, [operate_itw_name, operate_itw_time, operate_itw_result, operate_itw_suggest, main_name])
        return result
    }
    async researchComment (main_name, research_itw_name, research_itw_time, research_itw_write_result, research_itw_result, research_itw_suggestion) {
        if (research_itw_time == "Invalid Date") {
            research_itw_time = "未选择时间"
        }
        const statement = `INSERT INTO research_itw_info (main_name, research_itw_name, research_itw_time, research_itw_write_result, research_itw_result, research_itw_suggestion) VALUES (?,?,?,?,?,?)`
        const [result] = await connection.execute(statement, [main_name, research_itw_name, research_itw_time, research_itw_write_result, research_itw_result, research_itw_suggestion])

        const statement3 = `UPDATE all_info SET research_itw_name=?,research_itw_time=?,research_itw_write_result=?,research_itw_result=?,research_itw_suggestion=? WHERE cn_name=?;`
        await connection.execute(statement3, [research_itw_name, research_itw_time, research_itw_write_result, research_itw_result, research_itw_suggestion, main_name])
        return result
    }

    async marketComment (main_name, market_itw_name, market_itw_time, market_itw_result, market_itw_suggest) {
        if (market_itw_time == "Invalid Date") {
            market_itw_time = "未选择时间"
        }

        const statement = `INSERT INTO market_itw_info (main_name, market_itw_name, market_itw_time, market_itw_result, market_itw_suggest) VALUES (?,?,?,?,?)`
        const [result] = await connection.execute(statement, [main_name, market_itw_name, market_itw_time, market_itw_result, market_itw_suggest])


        //评论插入到详情
        const statement3 = `UPDATE all_info SET market_itw_name=?,market_itw_time=?,market_itw_result=?,market_itw_suggest=? WHERE cn_name=?`
        await connection.execute(statement3, [market_itw_name, market_itw_time, market_itw_result, market_itw_suggest, main_name])
        return result
    }

    async detailsData (name) {
        const statement = `SELECT * FROM all_info WHERE cn_name = ? ;`
        const [result] = await connection.execute(statement, [name])
        return result[0]
    }
    async finallyResult (finallyResult, name) {

        const statement = `UPDATE all_info SET finallyresult=? WHERE cn_name = ? ;`
        await connection.execute(statement, [finallyResult, name])

        const statement1 = `UPDATE interview_table_info SET result = ? WHERE name = ?;`
        await connection.execute(statement1, [finallyResult, name])

        const statement2 = `UPDATE application_table_info SET result = ? WHERE name = ?;`
        await connection.execute(statement2, [finallyResult, name])

    }

}
module.exports = new backendService