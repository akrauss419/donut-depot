const express = require('express');
const router = express.Router();
const donutsCtrl = require('../../controllers/api/donuts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
// /api/donuts
router.get('/', donutsCtrl.index);
router.post('/new', donutsCtrl.create);

router.post('/:id/comments', ensureLoggedIn, donutsCtrl.createComment);

module.exports = router;