const express = require('express');
const router = express.Router();


const {signup, getallstaff, getstaff, assign} = require('../controllers/staff_controller')
const {login} = require('../controllers/user_controller')

router.get('/', getallstaff);
router.get('/find/:dept', getstaff);
router.get('/login', login);
router.post('/register', signup);
// router.post('/:id/assign', assign);

// router.post('/forget-password',);
// router.get('/verification/:id');

// router.get('/report/:id');

module.exports = router;
