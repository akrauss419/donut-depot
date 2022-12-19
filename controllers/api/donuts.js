const Donut = require('../../models/donut');

module.exports = {
  index,
  create,
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
  const donut = await Donut.findById(req.params.id);
  donut.findOne(
    {'comments._id': req.params.id, 'comments.userId': req.user._id},
    function(err, donut) {
      if (!donut || err) return res.redirect(`/donuts/${donut._id}`);
      donut.comments.remove(req.params.id);
      donut.save();
      res.json(donut);
    }
  );  
}