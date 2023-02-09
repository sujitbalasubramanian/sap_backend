const Events = require('../model/events')

module.exports.get_events = async (req, res) => {
    try {
        const project = await Events.find({})
        res.status(200).json(project)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports.editEvent = async (req, res) => {
    const {id} = req.params
    try {
        const user = await User.findByIdAndUpdate(id, {...req.body});
        await user.save();
        res.status(200).json("Successfully Edited")
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports.addEvent = async (req, res) => {
    const id = req.body.id

    try {
        const newEvent = new Events({...req.body})
        const existingevent = await Events.findOne({id})
        if (existingevent) {
            return res.status(400).json('Event already found..')
        }
        await newEvent.save();
    } catch (err) {
        console.log(err.message)
        res.status(500).json('Something went worng...')
    }
}

module.exports.deleteEvent = async (req, res) => {
    const id = req.body.id
    try {
        await Events.findByIdAndDelete(id);
        res.status(200).json("Deleted Successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}
