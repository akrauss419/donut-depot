const Shop = require('../../models/shop');

module.exports = {
  index,
  create,
  createReview
};

async function index(req, res) {
  const shops = await Shop.find({});
  res.status(200).json(shops);
}

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const shop = await Shop.create(req.body);
    shop.save();
    res.json(shop);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function createReview(req, res) {
  try {
    req.body.user = req.user._id;
    const shop = await Shop.findById(req.params.id);
    shop.reviews.push(req.body);
    shop.save();
    res.json(shop);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}