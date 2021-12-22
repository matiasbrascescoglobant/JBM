const { Schema, model } = require('mongoose');
const paymentsPlans = require('../config/payments-plans');

// Segenera el esquema base
const studentSchema = new Schema({
    name: { type: String, required: [true, 'The name of the student cannot be empty.'] },
    lastname: { type: String, required: [true, 'The lastname of the student cannot be empty.'] },
    phoneNumber: String,
    paymentPlan: { type: Number, required: [true, 'The payment plan of the student cannot be empty.'], 
                                 min: [1, 'Payment plan must be greater than 0.'],
                                 enum: paymentsPlans },
},
{ 
    timestamps: true,
    versionKey: false 
});

// exportamon el schema generado
module.exports = model("student", studentSchema);