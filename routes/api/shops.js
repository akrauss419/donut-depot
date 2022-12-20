const express = require('express');
const router = express.Router();
const shopsCtrl = require('../../controllers/api/shops');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', shopsCtrl.index);
router.post('/new', shopsCtrl.create);
router.delete('/:id', ensureLoggedIn, shopsCtrl.delete);

module.exports = router;