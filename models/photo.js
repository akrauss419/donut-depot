const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  title: String,
  // donut: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Donut',
  // }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Photo', photoSchema);