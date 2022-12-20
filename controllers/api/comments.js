const Donut = require('../../models/donut');

module.exports = {
  createComment,
  deleteComment
};

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

async function deleteComment(req, res) {
  const donut = await Donut.findOne({'comments._id': req.params.id});
    donut.comments.remove(req.params.id);
    await donut.save();
    res.json(donut);
}