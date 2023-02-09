const express = require('express');
const router = express.Router();

const {get_events, addEvent, editEvent, deleteEvent} = require('../controllers/event_controllers')

router.get('/', get_events);
router.post('/add', addEvent);
router.patch('/edit/:id', editEvent);
router.delete('/delete/:id', deleteEvent);

module.exports = router;
