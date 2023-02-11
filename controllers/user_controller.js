const bcrypt = require('bcryptjs')
const User = require('../model/user')
const Staff = require('../model/staff')

module.exports.signup = async (req, res) => {
    const {user_name, kongu_email, password, rollno, classname, department, year} = {...req.body}

    try {
        const existinguser = await User.findOne({kongu_email})
        if (existinguser) {
            return res.status(400).json('User already found..')
        }
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new User({user_name, kongu_email, password: hashPassword, rollno, year, classname, department})
        await newUser.save();
        res.status(200).json(newUser)
    } catch (err) {
        console.log(err.message)
        res.status(500).json('Something went worng...')
    }
}

module.exports.login = async (req, res) => {
    const {kongu_email, password} = req.body;
    try {
        var existinguser = await User.findOne({kongu_email})
        if (!existinguser) {
            existinguser = await Staff.findOne({kongu_email})
            if (!existinguser) {
                console.log("User not found...");
                return res.status(404).json("User not found...")
            }
        }
        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if (!isPasswordCrt) {
            return res.status(400).json("Password Incorrect")
        }
        res.status(200).json(existinguser)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

module.exports.get_user = async (req, res) => {
    try {
        const {id} = req.params;
        var user = await User.findById(id);
        if (user == null)
            user = await Staff.findById(id);
        res.status(200).json(user)
    } catch (e) {
        console.log(e.message)
        res.status(500).json(e)
    }

}

module.exports.editProfile = async (req, res) => {
    const {id} = req.params
    console.log(id)
    try {
        const user = await Staff.findByIdAndUpdate(id, {...req.body});
        await user.save();
        res.status(200).json("Successfully Edited")
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports.getalluser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}
