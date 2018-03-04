'use strict'

const mongoose = require('mongoose');

//schema to represent a blog post
const blogPostSchedma = mongoose.Schema({
  title: {type: String, required: true},
  author: {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
  },
  content: {type: String, required: true}
});

blogPostSchedma.virtudal('fullName').get(function(){
  return `${this.firstName} ${this.lastName}`.trim();
});

blogPostSchedma.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    author: this.fullName
  };
};

const blogPost = mongoose.model('blogPost', blogPostSchedma);
model.exports ={blogPost};
