const Shop = require('../../models/shop');

module.exports = {
  createReview,
  updateReview,
  deleteReview
};

async function createReview(req, res) {
  try {
    const shop = await Shop.findById(req.params.id);
      req.body.user = req.user._id;
      shop.reviews.push(req.body);
      await shop.save();
      const shops = await Shop.find({});
      res.json(shops);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updateReview(req, res, next) {
  try {
    const shop = await Shop.findOne({'reviews._id': req.params.id});
      const review = shop.reviews.id(req.params.id);
      review.content = req.body.content;
      review.rating = req.body.rating;
      await shop.save();
      const shops = await Shop.find({});
      res.json(shops);
  } catch (err) {
      console.log(err);
  }
}

async function deleteReview(req, res) {
  const shop = await Shop.findOne({'reviews._id': req.params.id});
    shop.reviews.remove(req.params.id);
    await shop.save();
    const shops = await Shop.find({});
    res.json(shops);
}