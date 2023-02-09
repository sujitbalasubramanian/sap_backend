const mongoose = require("mongoose");
const {Schema} = mongoose;

const eventsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    club: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    poster: {
        data: Buffer,
        contentType: String
    },
    end_date: {
        type: Date,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    eligible_year: {
        type: Array,
        required: true,
        default: ['all']
    },
    eligible_dept: {
        type: Array,
        required: true,
        default: ['all']
    },
    paid: {
        type: Boolean,
        default: true,
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
})

module.exports = mongoose.model("Events", eventsSchema);
