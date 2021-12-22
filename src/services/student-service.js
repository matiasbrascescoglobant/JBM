import StudentModel from '../models/students-model';

const createStudent = async data => {
    const newStudent = new StudentModel({
        ...data
    });

    await newStudent.save();

    return newStudent;
};

const getStudents = () => StudentModel.find(); 

const updateStudent = (id, body) => StudentModel.findByIdAndUpdate(id, body, { new: true });

const deleteStudent = id => StudentModel.findByIdAndDelete(id);

export {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
}