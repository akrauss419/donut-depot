const Donut = require('../../models/donut');

module.exports = {
  index,
  create,
  updateDonut,
  delete: deleteDonut,
  createComment,
  deleteComment
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

async function deleteComment(req, res) {
  const donut = await Donut.findOne({donutId: req.params._id});
  const commentSubDoc = donut.comments.id(req.params.commentId);
    donut.comments.remove(commentSubDoc);
    await donut.save();
    res.json(donut);
}