const Donut = require('../../models/donut');

module.exports = {
  index,
  create,
  createComment
};

async function index(req, res) {
  const donuts = await Donut.find({});
  res.status(200).json(donuts);
}

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const donut = await Donut.create(req.body);
    donut.save();
    res.json(donut);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function createComment(req, res) {
  try {
    req.body.user = req.user._id;
    const donut = await Donut.findById(req.params.id);
    donut.comments.push(req.body);
    donut.save();
    res.json(donut);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}