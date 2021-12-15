const Student = require('../models/students-model');

function add_students (request, response){
    let student = new Student({
        name: request.body.name,
        lastname: request.body.lastname,
        phoneNumber: request.body.phoneNumber,
        paymentPlan: request.body.paymentPlan
    });

    student.save((error, result) => {
        if (error){
            return response.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        if (!result){
            return response.status(400).json({
                error: true,
                message: `Client error: ${error}`,
                code: 20
            });
        }

        return response.status(200).json({
            error: false,
            message: 'Success',
            data: result,
            code: 10
        });
    });
}

function read_students (request, response){
    Student.find().exec((error, students) => {
        if (error){
            return response.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        return response.status(200).json({
            error: false,
            message: 'Success',
            data: students,
            code: 10
        });
    });
}

function delete_students (request, response){
    const student_id = request.params.id;
    Student.deleteOne({_id: student_id}, (error, result) => {
        if (error){
            return response.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        if (result === null){
            return response.status(400).json({
                error: true,
                message: `Not Found`,
                code: 30
            });
        }

        return response.status(200).json({
            error: false,
            message: 'Success',
            data: result,
            code: 10
        });

    });
}

function update_students (request, response){
    const student_id = request.params.id;
    const data = request.body;
    Student.findByIdAndUpdate(student_id, data, {new: true}, (error, result) => {
        if (error){
            return response.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        if (!result){
            return response.status(400).json({
                error: true,
                message: 'Not found',
                code: 30
            });
        }

        return response.status(200).json({
            error: false,
            message: 'Success',
            data: result,
            code: 10
        });
    });
}

module.exports = {
    read_students,
    add_students,
    delete_students,
    update_students
};