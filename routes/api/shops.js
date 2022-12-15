const express = require('express');
const router = express.Router();
const shopsCtrl = require('../../controllers/api/shops');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', shopsCtrl.index);
router.post('/new', shopsCtrl.create);

module.exports = router;