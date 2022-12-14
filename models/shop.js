const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
  },
  rating: {
    type: Number,
  },
  // like: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  userName: String
}, {
  timestamps: true
});

const shopSchema = new Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  // favorite: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }],
  reviews: [reviewSchema],
  // donut: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Donut'
  // }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  userName: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Shop', shopSchema);