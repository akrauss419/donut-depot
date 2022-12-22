const uploadFile = require('../../config/upload-file');
const Photo = require('../../models/photo');

module.exports = {
  index
};

async function index(req, res) {
  const photos = await Photo.find({}).sort('-createdAt').exec();
  res.json(photos);
}