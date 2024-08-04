const mongoose = require("mongoose");
const { Schema } = mongoose;

const doctorSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30,
    },
    specialization: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
    },
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment',
    }],
}, {
    timestamps: true, // automatically add createdAt and updatedAt fields
});

module.exports = mongoose.model('Doctor', doctorSchema);
