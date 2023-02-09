const mongoose = require("mongoose");
const {Schema} = mongoose;

const sapSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    proff: {
        data: Buffer,
        contentType: String
    },
    category: {
        type: String,
    },
    io: {
        type: String,
    },
    rollno: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    sub_category: {
        type: String,
        required: true
    },
    io: {
        type: String,
        enum: ["inside", "outside"],
        default: 'inside'
    },
    points: {
        type: Number,
        default: 0
    },
    verification_status: {
        type: String,
        enum: ["rejected", "pending", "verified"],
        default: 'pending'
    },
})

module.exports = mongoose.model("Sap", sapSchema);
