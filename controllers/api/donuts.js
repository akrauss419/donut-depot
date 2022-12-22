const Donut = require('../../models/donut');
const Photo = require('../../models/photo');
const uploadFile = require('../../config/upload-file');

module.exports = {
  index,
  create,
  updateDonut,
  delete: deleteDonut,
  upload
};

async function index(req, res) {
  const donuts = await Donut.find({});
  res.status(200).json(donuts);
}

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    const donut = await Donut.create(req.body);
    await donut.save();
    const allDonuts = await Donut.find({});
    res.json(allDonuts);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updateDonut(req, res, next) {
  req.body.user = req.user._id;
  await Donut.findByIdAndUpdate({_id: req.params.id}, req.body);
    const donut = await Donut.find({user: req.user._id});
    res.json(donut);
}

async function deleteDonut(req, res) {
  req.body.user = req.user._id;
  const donut = await Donut.findByIdAndDelete(req.params.id);
  res.json(donut);
}

async function upload(req, res) {
  try {
    console.log('upload');
    if (req.file) {
      const photoURL = await uploadFile(req.file);
      const photoDoc = await Photo.create({
        url: photoURL,
        title: req.body.title
      });
      res.json(photoDoc);
    } else {
      throw new Error('Must select a file');
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
}