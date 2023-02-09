const mongoose = require("mongoose");
const {Schema} = mongoose;

const staffuserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
    },
    password: {
        type: String,
    },
    department: {
        type: String,
    },
    staffid: {
        type: String,
    },
    designation: {
        type: String,
    },
    advisor: {
        type: String,
    },
    user_verified: {
        type: Boolean,
        default: false,
    },
    is_hod: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("StaffUser", staffuserSchema);

