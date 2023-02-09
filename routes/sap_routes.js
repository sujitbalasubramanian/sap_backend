const express = require('express');
const router = express.Router();

const {getallsap, deletesap, newsap, editsap} = require('../controllers/sap_controller')

router.get('/all/:id', getallsap);
router.post('/add/:id', deletesap);
router.patch('/:id/edit/:sid', newsap);
router.patch('/:id/delete/:sid', editsap);

module.exports = router;
