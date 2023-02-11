const express = require('express');
const router = express.Router();

const multer = require('multer')

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({storage: storage})
const {get_events, addEvent, editEvent, deleteEvent} = require('../controllers/event_controllers')

router.get('/', get_events);
router.post('/add', upload.single('poster'), addEvent);
router.patch('/edit/:id', editEvent);
router.delete('/delete/:id', deleteEvent);

module.exports = router;
