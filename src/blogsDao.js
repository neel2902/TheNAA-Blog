'use strict';

const ObjectId = require('bson').ObjectId;
require('dotenv').config();

let blogs;

module.exports = class UsersDAO {
  static async injectDB(conn) {
    if (blogs) {
      return;
    }
    try {
      let naa_db = await conn.db(process.env.NAA_NS);
      let blogs = await naa_db.collection('blogs');
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in usersDAO: ${e}`,
      );
    }
  }

  static async getTopBlogs(postType){
  
    let topBlogs;
    
    try{

      if(postType)
        topBlogs = await blogs.find({type: postType}).sort({view: -1}).limit(5);
      else
        topBlogs = await blogs.find().sort({view: -1}).limit(5);
    }
    
    catch(e)
    {
      console.error(e);
      throw e;
    }

    return topBlogs
  
  }

  static async getBlogs(postType){
  
    let blogs;

    try{
  
      if(postType)
        blogs = await blogs.find({type: postType});
      else
        blogs = await blogs.find({});
    }
  
    catch(e){
      console.error(e);
      throw e;
    }
  
    return blogs
  }

  static async getBlog(postType,postId){ 
  
    let blog;

    try{
  
      blog = await blogs.findAndModify({
        query: {type:postType, _id:ObjectId(postId)},
        update: {$inc:{views: 1}}
      });
  
    }
  
    catch(e){
      console.error(e);
      throw e;
    }

    return blog;
  }

  static async addBlog(blog){
    
    try{
    
      await blogs.insertOne(blog);  
    
    }
    catch(e){
    
      console.error(e);
      throw e;
    
    }
  }

};