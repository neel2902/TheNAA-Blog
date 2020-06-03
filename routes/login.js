'use strict';

const express = require('express');
const path = require('path');
require('dotenv').config();
var CryptoJS = require("crypto-js");
const multer = require('multer');

let AuthorDao = require(path.join(__dirname,'..','src','authorDao.js'));

let router = express.Router();
let upload = multer();

router.post('/login',upload.none(),async (req,res)=>{
   let author;
   //console.log(req.body);
   if(req.body.name && req.body.name.length>0)
   {
      try{
      	author = await AuthorDao.getAuthor({name:req.body.name, secret: CryptoJS.SHA256(req.body.secret).toString()});
	//console.log(author);
      }
      catch(e)
      {
        return res.status(500).json({error:"Authentication Error", message: e.message});
      }
      if(author)
	req.session.author = author;
      else{
         return res.status(404).json({error:"Authentication Error", message:"No such author exists"});
      }

    return res.status(200).send("login successful");      	
   }
   else
   {
	return res.status(404).json({error:"Authentication Error", message:"Author name cannot be an empty string"});
   }
   
});

module.exports= router;


