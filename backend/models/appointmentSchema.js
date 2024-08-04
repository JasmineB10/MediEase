const mongoose = require("mongoose");
const { Schema } = mongoose;

const appointmentSchema = new Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Patient', 
        required: true,
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['Scheduled', 'Completed', 'Canceled'],
        default: 'Scheduled',
    },
    notes: {
        type: String,
    },
}, {
    timestamps: true, 
});

module.exports = mongoose.model('Appointment', appointmentSchema);
