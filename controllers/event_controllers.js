const Events = require('../model/events')

module.exports.get_events = async (req, res) => {
    try {
        const events = await Events.find({})
        res.status(200).json(events)
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
    try {
        const newEvent = new Events({...req.body})
        if (req.file) {
            newEvent.poster = req.file.path
        }
        await newEvent.save();
        res.status(200).json('Successfully added')
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
