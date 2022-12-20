const express = require('express');
const router = express.Router();
const donutsCtrl = require('../../controllers/api/donuts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', donutsCtrl.index);
router.post('/new', donutsCtrl.create);
router.put('/:id/update', ensureLoggedIn, donutsCtrl.updateDonut);
router.delete('/:id', ensureLoggedIn, donutsCtrl.delete);

module.exports = router;