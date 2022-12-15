const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  like: {
    type: Boolean
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

const donutSchema = new Schema({
  flavor: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  sprinkles: {
    type: Boolean,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  favorite: {
    type: Boolean,
  },
  comments: [commentSchema],
  shop: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Shop'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Donut', donutSchema);