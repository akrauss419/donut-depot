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
    const donut = await Donut.findOne(req.params.id);
      donut.comments.push(req.body);
      donut.save();
      res.json(donut);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updateComment(req, res, next) {
  const donut = await Donut.findOne({'comments._id': req.params.id}, req.body);
    const comment = donut.comments.id(req.params.id);
    await comment.save();
    res.json(comment);
}

async function deleteComment(req, res) {
  const donut = await Donut.findOne({'comments._id': req.params.id});
    donut.comments.remove(req.params.id);
    await donut.save();
    res.json(donut);
}