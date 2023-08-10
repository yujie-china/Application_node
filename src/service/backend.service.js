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
        const statement1 = `UPDATE interview_table_info SET result = ? WHERE name = ?;`
        await connection.execute(statement1, [operate_itw_result, main_name])
        const statement2 = `UPDATE application_table_info SET result = ? WHERE name = ?;`
        await connection.execute(statement2, [operate_itw_result, main_name])
        return result
    }
    async researchComment (main_name, research_itw_name, research_itw_time, research_itw_write_result, research_itw_result, research_itw_suggestion) {
        if (research_itw_time == "Invalid Date") {
            research_itw_time = "未选择时间"
        }
        const statement = `INSERT INTO research_itw_info (main_name, research_itw_name, research_itw_time, research_itw_write_result, research_itw_result, research_itw_suggestion) VALUES (?,?,?,?,?,?)`
        const [result] = await connection.execute(statement, [main_name, research_itw_name, research_itw_time, research_itw_write_result, research_itw_result, research_itw_suggestion])
        const statement1 = `UPDATE interview_table_info SET result = ? WHERE name = ?;`
        await connection.execute(statement1, [operate_itw_result, main_name])
        const statement2 = `UPDATE application_table_info SET result = ? WHERE name = ?;`
        await connection.execute(statement2, [operate_itw_result, main_name])
        return result
    }
    async marketComment (main_name, market_itw_name, market_itw_time, market_itw_result, market_itw_suggest) {
        if (market_itw_time == "Invalid Date") {
            market_itw_time = "未选择时间"
        }
        const statement = `INSERT INTO market_itw_info (main_name, market_itw_name, market_itw_time, market_itw_result, market_itw_suggest) VALUES (?,?,?,?,?)`
        const [result] = await connection.execute(statement, [main_name, market_itw_name, market_itw_time, market_itw_result, market_itw_suggest])
        const statement1 = `UPDATE interview_table_info SET result = ? WHERE name = ?;`
        await connection.execute(statement1, [operate_itw_result, main_name])
        const statement2 = `UPDATE application_table_info SET result = ? WHERE name = ?;`
        await connection.execute(statement2, [operate_itw_result, main_name])
        return result
    }


}
module.exports = new backendService