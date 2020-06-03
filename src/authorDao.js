'use strict';

const ObjectId = require('bson').ObjectId;
require('dotenv').config();

let naa_db;
let authors_collection;

module.exports = class sDAO {
  static async injectDB(conn) {
    if (authors_collection) {
      return;
    }
    try {
      naa_db = await conn.db(process.env.NAA_NS);
      authors_collection = await naa_db.collection('authors');
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in authorsDAO: ${e}`,
      );
    }
  }


  static async addAuthor(author){
    
    try{
    
      await authors_collection.insertOne(author);  
    
    }
    catch(e){
    
      console.error(e);
      throw e;
    
    }
  }

  static async getAuthor(filter){
    
    let author = null;

    try{
    
      author = await authors_collection.findOne(filter);  
    
    }
    catch(e){
    
      console.error(e);
      throw e;
    
    }

   return author;
  } 

};
