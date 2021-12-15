const { Schema, model } = require('mongoose');
const paymentsPlans = [1, 3, 6, 10, 12];

// Segenera el esquema base
const studentSchema = new Schema({
    name: { type: String, require: [true, 'The name of the student cannot be empty.'] },
    lastname: { type: String, require: [true, 'The lastname of the student cannot be empty.'] },
    phoneNumber: String,
    paymentPlan: { type: Number, request: [true, 'The payment plan of the student cannot be empty.'], 
                                 min: [1, 'Payment plan must be greater than 0.'],
                                enum: paymentsPlans },
});

// exportamon el schema generado
module.exports = model("Student", studentSchema);