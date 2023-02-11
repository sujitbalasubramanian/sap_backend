const mongoose = require("mongoose");
const {Schema} = mongoose;

const staffuserSchema = new Schema({
    staff_name: {
        type: String,
        required: true
    },
    kongu_email: {
        type: String,
    },
    password: {
        type: String,
    },
    department: {
        type: String,
    },
    advisor: {
        type: String,
        default: "Nil"
    },
    year: {
        type: String,
        default: "Nil"
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

