const express = require('express');
const router = express.Router();

const {get_user, editProfile} = require('../controllers/user_controller')

router.get('/:id', get_user);
router.patch('/edit/:id', editProfile);

module.exports = router;
