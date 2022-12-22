const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
  },
  // like: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true
});

const donutSchema = new Schema({
  flavor: {
    type: String,
  },
  type: {
    type: String,
  },
  sprinkles: {
    type: String,
  },
  unique: {
    type: String,
  },
  review: {
    type: String,
  },
  rating: {
    type: Number,
  },
  // favorite: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }],
  comments: [commentSchema],
  shop: String,
  url: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  userName: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Donut', donutSchema);