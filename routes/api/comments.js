const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/:id/new', ensureLoggedIn, commentsCtrl.createComment);
router.put('/:id', ensureLoggedIn, commentsCtrl.updateComment);
router.delete('/:id', ensureLoggedIn, commentsCtrl.deleteComment);

module.exports = router;