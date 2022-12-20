const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/shops/:shopId/reviews', ensureLoggedIn, reviewsCtrl.createReview);
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.deleteReview);

module.exports = router;