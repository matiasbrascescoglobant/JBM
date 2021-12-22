import mongoose from 'mongoose';
const roles = require('../config/roles');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true, enum: roles },
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('user', UserSchema);