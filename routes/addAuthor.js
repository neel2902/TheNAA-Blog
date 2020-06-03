const express = require('express');
const multer = require('multer');
const path = require('path');
const auth = require(path.join(__dirname,'..','src','auth.js'));
var CryptoJS = require("crypto-js");
require('dotenv').config();

let upload = multer({
		storage:multer.diskStorage({ 
			destination: function (req, file, cb) {
    			cb(null, path.join(__dirname,'..','public','authorImgs'));
  			},
    		filename: function (req, file, cb) {
        	let originalnameList=file.originalname.split('.');
        	let extension=originalnameList[originalnameList.length-1];
        	cb(null, file.fieldname + '-' + Date.now()+'.'+extension);
    		}
    	})
    });

let router = express.Router();

let AuthorDao = require(path.join(__dirname,'..','src','authorDao.js'));

router.post('/addAuthor',auth.admin,upload.single('image'),async (req,res)=>{
	try{
		await AuthorDao.addAuthor({
			location: req.file?'/authorImgs/'+req.file.filename:"",
			date_added: Date.now(),
			name: req.body.name,
			secret: CryptoJS.SHA256(req.body.secret).toString(),
			role : 'author'
			
		});	
	}
	catch(e){
		return res.status(500).json({error:"error while adding an author", message: e.message});
	}
	
	return res.status(200).send('author added successfully');

})

module.exports = router;
