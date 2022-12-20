const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/donuts/:donutId/comments', ensureLoggedIn, commentsCtrl.createComment);
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.deleteComment);

module.exports = router;