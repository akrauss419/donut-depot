const express = require('express');
const router = express.Router();
const donutsCtrl = require('../../controllers/api/donuts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', donutsCtrl.index);
router.post('/new', donutsCtrl.create);

module.exports = router;