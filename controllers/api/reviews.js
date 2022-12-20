const Shop = require('../../models/shop');

module.exports = {
  createReview
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