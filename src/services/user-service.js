import UserModel from '../models/users-model';
import bcrypt from 'bcryptjs';

const createUser = async data => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(data.password, salt);
    
    const newUser = new UserModel({
        ...data,
        password: hashedPass
    });

    await newUser.save();

    return newUser;
};

const findUserByEmail = email => UserModel.findOne({ email }); 

const getUsers = () => UserModel.find(); 

const updateUser = (id, body) => UserModel.findByIdAndUpdate(id, body, { new: true });

const deleteUser = id => UserModel.findByIdAndDelete(id);

export {
    createUser,
    findUserByEmail,
    getUsers,
    updateUser,
    deleteUser
}