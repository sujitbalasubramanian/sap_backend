const Sap = require('../model/sap')
const User = require('../model/user')

module.exports.getallsap = async (req, res) => {
    const id = req.body.id
    try {
        const user = await User.findById(id)
        res.status(200).json([...user.sap_points_verified, ...user.sap_points_unverified])
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports.newsap = async (req, res) => {
    const id = req.body.id
    try {
        const sap = new Sap({...req.body})
        const user = await User.findById(id)
        user.sap_points_unverified.push(sap);
        await user.save();
        res.status(200).json("success");
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports.editsap = async (req, res) => {
    const id = req.body.id
    try {
        const sap = await Sap.findByIdAndUpdate(id, {...req.body});
        await sap.save()
        res.status(200).json('sap edited')
    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports.deletesap = async (req, res) => {
    const id = req.body.id
    try {
        await Sap.findByIdAndDelete(id);
        res.status(200).json("Deleted Successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}
