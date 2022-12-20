const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/donuts/:donutId/comments', commentsCtrl.createComment);
router.delete('/comments/:id', commentsCtrl.deleteComment);

module.exports = router;