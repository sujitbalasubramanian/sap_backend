const Sap = require('../model/sap')
const User = require('../model/user')

module.exports.getallfilter = async (req, res) => {
    try {
        console.log(req.body)
        const {category, sub_category, io, year, classname} = {...req.body}

        if (category == "Select" && sub_category == "Select" && io == "Select" && year == "Select" && classname == "Select")
            var saps = await Sap.find({})
        else if (category == "Select" && sub_category == "Select" && io == "Select" && year == "Select")
            var saps = await Sap.find({classname})
        else if (category == "Select" && sub_category == "Select" && io == "Select" && classname == "Select")
            var saps = await Sap.find({year})
        else if (category == "Select" && sub_category == "Select" && year == "Select" && classname == "Select")
            var saps = await Sap.find({io})
        else if (category == "Select" && io == "Select" && year == "Select" && classname == "Select")
            var saps = await Sap.find({sub_category})
        else if (sub_category == "Select" && io == "Select" && year == "Select" && classname == "Select")
            var saps = await Sap.find({category})
        else if (io == "Select" && year == "Select" && classname == "Select")
            var saps = await Sap.find({category, sub_category})
        else if (sub_category == "Select" && year == "Select" && classname == "Select")
            var saps = await Sap.find({category, io})
        else if (sub_category == "Select" && io == "Select" && classname == "Select")
            var saps = await Sap.find({category, year})
        else if (sub_category == "Select" && io == "Select" && year == "Select")
            var saps = await Sap.find({category, classnamee})
        else if (category == "Select" && year == "Select" && classname == "Select")
            var saps = await Sap.find({sub_category, io})
        else if (category == "Select" && io == "Select" && classname == "Select")
            var saps = await Sap.find({sub_category, year})
        else if (category == "Select" && io == "Select" && year == "Select")
            var saps = await Sap.find({sub_category, classname})
        else if (category == "Select" && sub_category == "Select" && classname == "Select")
            var saps = await Sap.find({io, year})
        else if (category == "Select" && sub_category == "Select" && year == "Select")
            var saps = await Sap.find({io, classname})
        else if (category == "Select" && sub_category == "Select" && io == "Select")
            var saps = await Sap.find({year, classname})
        else if (category == "Select" && sub_category == "Select")
            var saps = await Sap.find({io, year, classname})
        else if (category == "Select" && io == "Select")
            var saps = await Sap.find({sub_category, year, classname})
        else if (category == "Select" && year == "Select")
            var saps = await Sap.find({sub_category, io, classname})
        else if (category == "Select" && classname == "Select")
            var saps = await Sap.find({io, sub_category, year})
        else if (sub_category == "Select" && io == "Select")
            var saps = await Sap.find({category, year, classname})
        else if (sub_category == "Select" && year == "Select")
            var saps = await Sap.find({category, io, classname})
        else if (sub_category == "Select" && classname == "Select")
            var saps = await Sap.find({category, io, year})
        else if (io == "Select" && classname == "Select")
            var saps = await Sap.find({category, sub_category, year})
        else if (io == "Select" && year == "Select")
            var saps = await Sap.find({category, sub_category, classname})
        else if (year == "Select" && classname == "Select")
            var saps = await Sap.find({category, sub_category, io})
        else if (category == "Select")
            var saps = await Sap.find({io, sub_category, year, classname})
        else if (sub_category == "Select")
            var saps = await Sap.find({category, io, year, classname})
        else if (io == "Select")
            var saps = await Sap.find({category, sub_category, year, classname})
        else if (year == "Select")
            var saps = await Sap.find({category, sub_category, io, classname})
        else if (classname == "Select")
            var saps = await Sap.find({category, sub_category, year, io})

        res.status(200).json(saps)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports.getall = async (req, res) => {
    try {
        const saps = await Sap.find({})
        res.status(200).json(saps)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

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
    try {
        const {id} = req.params;
        const sap = new Sap({...req.body})
        console.log(req.file)
        if (req.file) {
            sap.proof = req.file.path
        }
        const user = await User.findById(id)
        user.sap_points_unverified.push(sap);
        await sap.save();
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
