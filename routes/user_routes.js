const express = require('express');
const router = express.Router();

const {login, signup} = require('../controllers/user_controller')

router.get('/login', login);
router.post('/register', signup);

// router.post('/forget-password',);
// router.get('/verification/:id');

// router.get('/report/:id');

module.exports = router;
