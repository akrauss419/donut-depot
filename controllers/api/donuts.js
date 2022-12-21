const Donut = require('../../models/donut');

module.exports = {
  index,
  create,
  updateDonut,
  delete: deleteDonut,
};

async function index(req, res) {
  const donuts = await Donut.find({});
  res.status(200).json(donuts);
}

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const donut = await Donut.create(req.body);
    await donut.save();
    const allDonuts = Donut.find({});
    res.json(allDonuts);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updateDonut(req, res, next) {
  await Donut.findByIdAndUpdate({_id: req.params.id}, req.body);
    const donut = await Donut.find({user: req.user._id});
    res.json(donut);
}

async function deleteDonut(req, res) {
  req.body.user = req.user._id;
  const donut = await Donut.findByIdAndDelete(req.params.id);
  res.json(donut);
}