const Shop = require('../../models/shop');

module.exports = {
  index,
  create,
  updateShop,
  delete: deleteShop
};

async function index(req, res) {
  const shops = await Shop.find({});
  res.status(200).json(shops);
}

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    const shop = await Shop.create(req.body);
    await shop.save();
    const allShops = await Shop.find({});
    res.json(allShops);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function updateShop(req, res, next) {
  await Shop.findByIdAndUpdate({_id: req.params.id}, req.body);
    const shop = await Shop.find({user: req.user._id});
    res.json(shop);
}

async function deleteShop(req, res) {
  req.body.user = req.user._id;
  const shop = await Shop.findByIdAndDelete(req.params.id);
  res.json(shop);
}