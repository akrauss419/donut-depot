const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/:id/new', ensureLoggedIn, reviewsCtrl.createReview);
router.put('/:id', ensureLoggedIn, reviewsCtrl.updateReview);
router.delete('/:id', ensureLoggedIn, reviewsCtrl.deleteReview);

module.exports = router;