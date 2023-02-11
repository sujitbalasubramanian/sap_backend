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
const {getall, getallsap, getallfilter, deletesap, newsap, editsap} = require('../controllers/sap_controller')

router.get('/all/', getall);
router.get('/all/:id', getallsap);
router.post('/all/filter', getallfilter);
router.post('/add/:id', upload.single('proof'), newsap);
router.patch('/:id/edit/:sid', editsap);
router.patch('/:id/delete/:sid', deletesap);

module.exports = router;
