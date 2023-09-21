// const { mongoose } = require("mongoose");

// const postSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
//     likes: Number,
//  });

//  module.exports=mongoose.model('post',postSchema)

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [{
    text: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: false,
  },
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;