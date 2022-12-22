const express = require('express');
const router = express.Router();
const upload = require("multer")();
const photosCtrl = require('../../controllers/api/photos');

router.get('/', photosCtrl.index)

module.exports = router;