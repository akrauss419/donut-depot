const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  // like: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }],
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
  unique: {
    type: String,
  },
  review: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  // favorite: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }],
  comments: [commentSchema],
  shop: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Donut', donutSchema);