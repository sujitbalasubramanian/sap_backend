const bcrypt = require('bcryptjs')
const Staff = require('../model/staff')

module.exports.signup = async (req, res) => {
    console.log(req.body)
    const {first_name, last_name, kongu_email, password, rollno, classname, department} = {...req.body}

    try {
        const existingstaff = await User.findOne({kongu_email})
        if (existingstaff) {
            return res.status(400).json('staff already found..')
        }
        const hashPassword = await bcrypt.hash(password, 12);
        const newstaff = new User({first_name, last_name, kongu_email, password: hashPassword, rollno, classname, department})
        await newstaff.save();
    } catch (err) {
        console.log(err.message)
        res.status(500).json('Something went worng...')
    }
}

module.exports.login = async (req, res) => {
    const {kongu_email, password} = req.body;
    console.log(req.body)
    try {
        existingstaff = await Staff.findOne({kongu_email})
        if (!existingstaff) {
            console.log("staff not found...");
            return res.status(404).json("staff not found...")
        }
        const isPasswordCrt = await bcrypt.compare(password, existingstaff.password)
        if (!isPasswordCrt) {
            return res.status(400).json("Password Incorrect")
        }
        res.status(200).json(existingstaff)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

module.exports.get_staff = async (req, res) => {
    try {
        const {id} = req.params;
        const staff = await Staff.findById(id);
        res.status(200).json(staff)
    } catch (e) {
        console.log(e.message)
        res.status(500).json(e)
    }

}

module.exports.editProfile = async (req, res) => {
    const {id} = req.params
    try {
        const staff = await Staff.findByIdAndUpdate(id, {...req.body});
        await staff.save();
        res.status(200).json("Successfully Edited")
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports.getallstaff = async (req, res) => {
    try {
        const staffs = await Staff.find({});
        res.status(200).json(staffs)
    } catch (error) {
        res.status(500).json(error)
    }
}
