const mongoose = require("mongoose");
const { Schema } = mongoose;

const patientSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30,
    },
    dob: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
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
    insurance: {
        provider: {
            type: String,
            default: 'None',
        },
        policyNumber: {
            type: String,
            default: 'None',
        },
    },
    history: {
        type: String,
        default: 'None',
    },
    allergy: {
        type: String,
        default: 'None',
    },
    medication: {
        type: String,
        default: 'None',
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
    },
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment',
    }],
}, {
    timestamps: true, 
});

module.exports = mongoose.model('Patient', patientSchema);
