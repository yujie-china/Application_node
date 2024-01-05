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
    //返回详情信息
    async detailsData (name) {
        const statement = `SELECT * FROM all_info WHERE cn_name = ? ;`
        const [result] = await connection.execute(statement, [name])
        return result[0]
    }

    //雷达图结果
    async detailsDataPlus (name) {
        const statement = `SELECT * FROM all_info WHERE cn_name = ? ;`
        const [result] = await connection.execute(statement, [name])
        const aResutl = []
        function getRandomAdjustment () {
            return Math.floor(Math.random() * 11) - 5;
        }
        //年龄
        if (result[0].age > 50) {
            aResutl.push(10 + getRandomAdjustment())
        } else if (result[0].age > 45) {
            aResutl.push(20 + getRandomAdjustment())
        } else if (result[0].age > 40) {
            aResutl.push(30 + getRandomAdjustment())
        } else if (result[0].age > 35) {
            aResutl.push(40 + getRandomAdjustment())
        } else if (result[0].age > 30) {
            aResutl.push(50 + getRandomAdjustment())
        } else if (result[0].age > 25) {
            aResutl.push(60 + getRandomAdjustment())
        } else if (result[0].age > 20) {
            aResutl.push(70 + getRandomAdjustment())
        } else {
            aResutl.push(15 + getRandomAdjustment())
        }

        //学历
        if (result[0].education_level = "博士") {
            aResutl.push(90 + getRandomAdjustment())
        } else if (result[0].education_level = "硕士") {
            aResutl.push(70 + getRandomAdjustment())
        } else if (result[0].education_level = "本科") {
            aResutl.push(50 + getRandomAdjustment())
        } else if (result[0].education_level = "大专") {
            aResutl.push(30 + getRandomAdjustment())
        } else if (result[0].education_level = "高中") {
            aResutl.push(20 + getRandomAdjustment())
        } else {
            aResutl.push(10 + getRandomAdjustment())
        }
        //期望薪资
        if (result[0].price - 0 >= 20000) {
            aResutl.push(10 + getRandomAdjustment())
        } else
            if (result[0].price - 0 >= 17000) {
                aResutl.push(20 + getRandomAdjustment())
            } else if (result[0].price - 0 >= 15000) {
                aResutl.push(30 + getRandomAdjustment())
            } else if (result[0].price - 0 >= 12000) {
                aResutl.push(40 + getRandomAdjustment())
            } else if (result[0].price - 0 >= 10000) {
                aResutl.push(50 + getRandomAdjustment())
            } else if (result[0].price - 0 >= 8000) {
                aResutl.push(60 + getRandomAdjustment())
            } else if (result[0].price - 0 >= 6000) {
                aResutl.push(70 + getRandomAdjustment())
            } else if (result[0].price - 0 >= 4000) {
                aResutl.push(80 + getRandomAdjustment())
            } else if (result[0].price - 0 >= 2000) {
                aResutl.push(90 + getRandomAdjustment())
            } else {
                aResutl.push(90 + getRandomAdjustment())
            }

        //工作经历
        if (result[0].treatment1 - 0 >= 20000) {
            aResutl.push(90 + getRandomAdjustment());
        } else if (result[0].treatment1 - 0 >= 15000) {
            aResutl.push(80 + getRandomAdjustment());
        } else if (result[0].treatment1 - 0 >= 14000) {
            aResutl.push(75 + getRandomAdjustment());
        } else if (result[0].treatment1 - 0 >= 12000) {
            aResutl.push(65 + getRandomAdjustment());
        } else if (result[0].treatment1 - 0 >= 10000) {
            aResutl.push(50 + getRandomAdjustment());
        } else if (result[0].treatment1 - 0 >= 9000) {
            aResutl.push(40 + getRandomAdjustment());
        } else if (result[0].treatment1 - 0 >= 8000) {
            aResutl.push(30 + getRandomAdjustment());
        } else if (result[0].treatment1 - 0 >= 6000) {
            aResutl.push(25 + getRandomAdjustment());
        } else if (result[0].treatment1 - 0 >= 4000) {
            aResutl.push(15 + getRandomAdjustment());
        } else {
            aResutl.push(10 + getRandomAdjustment());
        }


        //政治面貌
        //工作经历
        if (result[0].politicalCascaderValue - 0 === '群众') {
            aResutl.push(40 + getRandomAdjustment());
        } else if (result[0].politicalCascaderValue === '中共预备党员') {
            aResutl.push(60 + getRandomAdjustment());
        } else {
            aResutl.push(80 + getRandomAdjustment());
        }
        let oresult = {
            data: aResutl,
            name: result[0].cn_name
        }
        return oresult
    }

    //最终入取结果
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