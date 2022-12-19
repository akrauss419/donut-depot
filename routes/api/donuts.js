const express = require('express');
const router = express.Router();
const donutsCtrl = require('../../controllers/api/donuts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', donutsCtrl.index);
router.post('/new', donutsCtrl.create);
router.delete('/:id', ensureLoggedIn, donutsCtrl.delete);

router.post('/:id/comments', ensureLoggedIn, donutsCtrl.createComment);
router.post('/:id/comments/:id', ensureLoggedIn, donutsCtrl.deleteComment);

module.exports = router;