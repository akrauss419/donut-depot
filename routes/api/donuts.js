const express = require('express');
const router = express.Router();
const donutsCtrl = require('../../controllers/api/donuts');
const upload = require("multer")();
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/upload', upload.single('photo'), donutsCtrl.upload);
router.get('/', donutsCtrl.index);
router.post('/new', donutsCtrl.create);
router.put('/:id/update', ensureLoggedIn, donutsCtrl.updateDonut);
router.delete('/:id', ensureLoggedIn, donutsCtrl.delete);

module.exports = router;