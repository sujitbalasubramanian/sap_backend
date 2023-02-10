const express = require('express');
const router = express.Router();


const {login, signup, getallstaff} = require('../controllers/staff_controller')

router.get('/', getallstaff);
router.get('/login', login);
router.post('/register', signup);

// router.post('/forget-password',);
// router.get('/verification/:id');

// router.get('/report/:id');

module.exports = router;
