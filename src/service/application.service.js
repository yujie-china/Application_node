const connection = require("../app/database")
class applicationService {
    async mainInsert (
        position,
        other_position,
        price,
        job_status,
        come_time,
        is_business_trip,
        isFriend,
        friend_name,
        community,
        office,
        isAgain,
        re_position,
        interview_time,
        cascaderValue,
        road,
        cn_name,
        eng_name,
        sex,
        birth_time,
        politicalCascaderValue,
        marital,
        locationCascaderValue,
        livingCascaderValue,
        nativeCascaderValue,
        nation,
        education_level,
        education_school,
        education_major,
        phone,
        wx,
        ID_card,
        email,
        emergency_phone,
        sick,
        sick_level,
        certificate,
        isCar,
        level,
        language,
        isLevel,
        home_address,
        habit,
        confirmed,
        application_name,
        apply_time) {

        const statement = `INSERT INTO main_info (position,
            other_position,
            price,
            job_status,
            come_time,
            is_business_trip,
            isFriend,
            friend_name,
            community,
            office,
            isAgain,
            re_position,
            interview_time,
            cascaderValue,
            road,
            cn_name,
            eng_name,
            sex,
            birth_time,
            politicalCascaderValue,
            marital,
            locationCascaderValue,
            livingCascaderValue,
            nativeCascaderValue,
            nation,
            education_level,
            education_school,
            education_major,
            phone,
            wx,
            ID_card,
            email,
            emergency_phone,
            sick,
            sick_level,
            certificate,
            isCar,
            level,
            language,
            isLevel,
            home_address,
            habit,
            confirmed,
            application_name,
            apply_time) VALUES (?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?)`
        const [result] = await connection.execute(statement, [position,
            other_position,
            price,
            job_status,
            come_time,
            is_business_trip,
            isFriend,
            friend_name,
            community,
            office,
            isAgain,
            re_position,
            interview_time,
            cascaderValue,
            road,
            cn_name,
            eng_name,
            sex,
            birth_time,
            politicalCascaderValue,
            marital,
            locationCascaderValue,
            livingCascaderValue,
            nativeCascaderValue,
            nation,
            education_level,
            education_school,
            education_major,
            phone,
            wx,
            ID_card,
            email,
            emergency_phone,
            sick,
            sick_level,
            certificate,
            isCar,
            level,
            language,
            isLevel,
            home_address,
            habit,
            confirmed,
            application_name,
            apply_time])

        return result
    }

    async certificateInsert (cn_name, certificate_name1,
        certificate_id1,
        certificate_end_time1,
        certificate_name2,
        certificate_id2,
        certificate_end_time2,
        certificate_name3,
        certificate_id3,
        certificate_end_time3) {
        const statement = `INSERT INTO certificates_info (main_name,certificate_name1,
            certificate_id1,
            certificate_end_time1,
            certificate_name2,
            certificate_id2,
            certificate_end_time2,
            certificate_name3,
            certificate_id3,
            certificate_end_time3) VALUES (?,?,?,?,?,?,?,?,?,?)`

        const [result] = await connection.execute(statement, [cn_name, certificate_name1,
            certificate_id1,
            certificate_end_time1,
            certificate_name2,
            certificate_id2,
            certificate_end_time2,
            certificate_name3,
            certificate_id3,
            certificate_end_time3])

        return result
    }
    async educationInsert (cn_name, start_time1,
        end_time1,
        school_name1,
        major1,
        study_way1,
        qualifications1,
        start_time2,
        end_time2,
        school_name2,
        major2,
        study_way2,
        qualifications2,
        start_time3,
        end_time3,
        school_name3,
        major3,
        study_way3,
        qualifications3,
        start_time4,
        end_time4,
        school_name4,
        major4,
        study_way4,
        qualifications4) {
        const statement = `INSERT INTO education_info (main_name, start_time1,
            end_time1,
            school_name1,
            major1,
            study_way1,
            qualifications1,
            start_time2,
            end_time2,
            school_name2,
            major2,
            study_way2,
            qualifications2,
            start_time3,
            end_time3,
            school_name3,
            major3,
            study_way3,
            qualifications3,
            start_time4,
            end_time4,
            school_name4,
            major4,
            study_way4,
            qualifications4) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`


        const [result] = await connection.execute(statement, [cn_name, start_time1,
            end_time1,
            school_name1,
            major1,
            study_way1,
            qualifications1,
            start_time2,
            end_time2,
            school_name2,
            major2,
            study_way2,
            qualifications2,
            start_time3,
            end_time3,
            school_name3,
            major3,
            study_way3,
            qualifications3,
            start_time4,
            end_time4,
            school_name4,
            major4,
            study_way4,
            qualifications4])

        return result
    }
    async familyInsert (cn_name, member_name1,
        relations1,
        workplace1,
        family_home1,
        family_phone1,
        member_name2,
        relations2,
        workplace2,
        family_home2,
        family_phone2,
        member_name3,
        relations3,
        workplace3,
        family_home3,
        family_phone3) {
        const statement = `INSERT INTO family_info (main_name,member_name1,
            relations1,
            workplace1,
            family_home1,
            family_phone1,
            member_name2,
            relations2,
            workplace2,
            family_home2,
            family_phone2,
            member_name3,
            relations3,
            workplace3,
            family_home3,
            family_phone3) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`
        const [result] = await connection.execute(statement, [cn_name, member_name1,
            relations1,
            workplace1,
            family_home1,
            family_phone1,
            member_name2,
            relations2,
            workplace2,
            family_home2,
            family_phone2,
            member_name3,
            relations3,
            workplace3,
            family_home3,
            family_phone3])
        return result

    }
    async trainingExperienceInsert (cn_name, trainingTime1,
        trainingLocation1,
        trainingCourse1,
        trainingTime2,
        trainingLocation2,
        trainingCourse2,
        trainingTime3,
        trainingLocation3,
        trainingCourse3) {
        const statement = `INSERT INTO training_experience_info (main_name,trainingTime1,
            trainingLocation1,
            trainingCourse1,
            trainingTime2,
            trainingLocation2,
            trainingCourse2,
            trainingTime3,
            trainingLocation3,
            trainingCourse3) VALUES (?,?,?,?,?,?,?,?,?,?);`
        const [result] = await connection.execute(statement, [cn_name, trainingTime1,
            trainingLocation1,
            trainingCourse1,
            trainingTime2,
            trainingLocation2,
            trainingCourse2,
            trainingTime3,
            trainingLocation3,
            trainingCourse3])
        return result


    }
    async workExperienceInsert (cn_name, workstart_time1,
        workend_time1,
        company_name1,
        position1,
        treatment1,
        leave_reason1,
        superior_phone1,
        workstart_time2,
        workend_time2,
        company_name2,
        position2,
        treatment2,
        leave_reason2,
        superior_phone2,
        workstart_time3,
        workend_time3,
        company_name3,
        position3,
        treatment3,
        leave_reason3,
        superior_phone3) {
        const statement = `INSERT INTO work_experience_info (main_name, workstart_time1,
            workend_time1,
            company_name1,
            position1,
            treatment1,
            leave_reason1,
            superior_phone1,
            workstart_time2,
            workend_time2,
            company_name2,
            position2,
            treatment2,
            leave_reason2,
            superior_phone2,
            workstart_time3,
            workend_time3,
            company_name3,
            position3,
            treatment3,
            leave_reason3,
            superior_phone3) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`
        const [result] = await connection.execute(statement, [cn_name, workstart_time1,
            workend_time1,
            company_name1,
            position1,
            treatment1,
            leave_reason1,
            superior_phone1,
            workstart_time2,
            workend_time2,
            company_name2,
            position2,
            treatment2,
            leave_reason2,
            superior_phone2,
            workstart_time3,
            workend_time3,
            company_name3,
            position3,
            treatment3,
            leave_reason3,
            superior_phone3])
        return result

    }


}
module.exports = new applicationService();