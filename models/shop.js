const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  // like: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

const shopSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  // favorite: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }],
  review: [reviewSchema],
  // donut: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Donut'
  // }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Shop', shopSchema);