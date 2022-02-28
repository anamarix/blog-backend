const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:String,
    body:String,
    author:String,
    date:{
        type: Date, default: Date.now
    }
}, {timestamps:true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports=Blog;