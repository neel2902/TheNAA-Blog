const express = require('express');
const multer = require('multer');

let upload = multer({

		storage:multer.diskStorage({ 
			destination: function (req, file, cb) {
    			cb(null, './public/imgs');
  			},
    		filename: function (req, file, cb) {
        	let originalnameList=file.originalname.split('.');
        	let extension=originalnameList[originalnameList.length-1];
        	cb(null, file.fieldname + '-' + Date.now()+'.'+extension);
    		}
    	})
    });

let router = express.Router();

let BlogsDao = require('../src/blogsDao.js');

router.post('/addBlog',upload.single('image'),async (req,res)=>{
	try{
		await BlogsDao.addBlog({
			location: 'imgs/'+req.file.filename,
			date_uploaded: Date.now(),
			type: req.body.type,
			title: req.body.title,
			subtitle: req.body.subtitle,
			content: req.body.content,
			author: req.body.author,
			views: 0
		});	
	}
	catch(e){
		return res.status(500).json({error:"error while adding a blog", message: e.message});
	}
	
	return res.status(200).send('blog added successfully');

})

module.exports = router;