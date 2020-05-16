'use strict';

const ObjectId = require('bson').ObjectId;
require('dotenv').config();

let naa_db;
let blogs_collection;

module.exports = class UsersDAO {
  static async injectDB(conn) {
    if (blogs_collection) {
      return;
    }
    try {
      naa_db = await conn.db(process.env.NAA_NS);
      blogs_collection = await naa_db.collection('blogs');
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
        topBlogs = await blogs_collection.find({type: postType}).sort({view: -1}).limit(5);
      else
        topBlogs = await blogs_collection.find({}).sort({view: -1}).limit(5);
    }
    
    catch(e)
    {
      console.error(e);
      throw e;
    }

    return topBlogs.toArray();
  
  }

  static async getBlogs(postType){
  
    let blogs;

    try{
  
      if(postType)
        blogs = await blogs_collection.find({type: postType});
      else
        blogs = await blogs_collection.find({});
    }
  
    catch(e){
      console.error(e);
      throw e;
    }
  
    return blogs.toArray();
  }

  static async getBlog(postType,postId){ 
  
    let blog;

    try{
  
      blog = await blogs_collection.findOneAndUpdate(
        {
          type:postType,
          _id:ObjectId(postId)
        },
        {
          $inc:
          {
            views:1
          }
        })
    }
  
    catch(e){
      console.error(e);
      throw e;
    }

    if(blog)
      return blog.value;
    
    else
      return blog;
  }

  static async addBlog(blog){
    
    try{
    
      await blogs_collection.insertOne(blog);  
    
    }
    catch(e){
    
      console.error(e);
      throw e;
    
    }
  }

};