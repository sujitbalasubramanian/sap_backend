const mongoose = require("mongoose");
const {Schema} = mongoose;

const sapSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    proof: {
        type: String,
    },
    category: {
        type: String,
    },
    sub_category: {
        type: String,
    },
    io: {
        type: String,
    },
    points: {
        type: Number,
        default: 0
    },
    rollno: {
        type: String
    },
    year: {
        type: String
    },
    classname: {
        type: String
    },
    verification_status: {
        type: String,
        enum: ["rejected", "pending", "verified"],
        default: 'pending'
    },
})

module.exports = mongoose.model("Sap", sapSchema);
