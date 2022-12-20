const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/donuts/:donutId', commentsCtrl.index);
router.post('/donuts/:donutId/comments', ensureLoggedIn, commentsCtrl.createComment);
router.put('/comments/:id/update', ensureLoggedIn, commentsCtrl.updateComment);
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.deleteComment);

module.exports = router;