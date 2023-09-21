// const mongoose =require('mongoose')
// const commentSchema = new mongoose.Schema({
//     content: { type: String, required: true },
//     author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
//  });

//  module.exports=mongoose.model('comment',commentSchema)


const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Comment', commentSchema);