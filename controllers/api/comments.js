const Donut = require('../../models/donut');

module.exports = {
  index,
  createComment,
  updateComment,
  deleteComment
};

async function index(req, res) {
  const comments = await Donut.comments.getAll();
  res.status(200).json(comments);
}

async function createComment(req, res) {
  try {
    const donut = await Donut.findById(req.params.id);
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      donut.comments.push(req.body);
      await donut.save();
      const donuts = await Donut.find({});
      res.json(donuts);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updateComment(req, res, next) {
  try {
    const donut = await Donut.findOne({'comments._id': req.params.id});
      const comment = donut.comments.id(req.params.id);
      comment.content = req.body.content;
      await donut.save();
      const donuts = await Donut.find({});
      res.json(donuts);
  } catch (err) {
    console.log(err);
  }
}

async function deleteComment(req, res) {
  const donut = await Donut.findOne({'comments._id': req.params.id});
    donut.comments.remove(req.params.id);
    await donut.save();
    const donuts = await Donut.find({});
    res.json(donuts);
}