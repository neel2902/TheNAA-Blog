const express = require('express');

const path = require('path');

let router = express.Router();

let BlogsDao = require(path.join(__dirname,'..','src','blogsDao.js'));

router.get('/blog/:postType/:postId',async (req,res)=>{

	let blog;

	try{
	
		blog = await BlogsDao.getBlog(req.params.postType, req.params.postId);	
	
	}
	catch(e){
	
		return res.status(500).json({error:"Unable to get the blog",message:e.message});
	
	}

	if(blog)
		return res.status(200).json(blog);
	
	else
		return res.status(404).json({error:"No such Blog found"});
})

module.exports = router;
