const Shop = require('../../models/shop');

module.exports = {
  index,
  create,
  delete: deleteShop
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

async function deleteShop(req, res) {
  req.body.user = req.user._id;
  const shop = await Shop.findByIdAndDelete(req.params.id);
  res.json(shop);
}