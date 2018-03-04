'use strict'

const mongoose = require('mongoose');

//schema to represent a blog post
const blogPostsSchedma = mongoose.Schema({
  title: {type: String, required: true},
  author: {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
  },
  content: {type: String, required: true}
});

blogPostsSchedma.virtual('fullName').get(function(){
  return `${this.firstName} ${this.lastName}`.trim();
});

blogPostsSchedma.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    author: this.fullName
  };
};

//Create and export blogPosts model
const blogPost = mongoose.model('blogPost', blogPostsSchedma);
module.exports ={blogPost};
