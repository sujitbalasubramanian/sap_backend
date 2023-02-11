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
        type: String
    },
    end_date: {
        type: String,
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
})

module.exports = mongoose.model("Events", eventsSchema);
