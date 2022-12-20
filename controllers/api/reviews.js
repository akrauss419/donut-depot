const Shop = require('../../models/shop');

module.exports = {
  createReview,
  deleteReview
};

async function createReview(req, res) {
  try {
    const shop = await Shop.findOne(req.params.id);
      shop.reviews.push(req.body);
      shop.save();
      res.json(shop);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function deleteReview(req, res) {
  const shop = await Shop.findOne({'reviews._id': req.params.id});
    shop.reviews.remove(req.params.id);
    await shop.save();
    res.json(shop);
}