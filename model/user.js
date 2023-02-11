const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    user_name: {
        type: String,
        required: true
    },
    kongu_email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
    },
    rollno: {
        type: String,
    },
    year: {
        type: String,
    },
    classname: {
        type: String,
    },
    department: {
        type: String,
    },
    sap_points_verified: [{
        type: Schema.Types.ObjectId,
        ref: "Sap",
    }],
    sap_points_unverified: [{
        type: Schema.Types.ObjectId,
        ref: "Sap",
    }],
    user_verified: {
        type: Boolean,
        default: false,
    }

})

module.exports = mongoose.model("User", userSchema);
