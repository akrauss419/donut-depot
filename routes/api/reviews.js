const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/shops/:shopId/reviews', ensureLoggedIn, reviewsCtrl.createReview);

module.exports = router;