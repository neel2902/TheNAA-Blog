const express = require('express');

let router = express.Router();
let BlogsDao = require('../src/blogsDao.js');

router.get('/blogs/:postType?',async (req,res)=>{

	let blogs;

	try{
	
		blogs = await BlogsDao.getBlogs(req.params.postType);	
	
	}
	catch(e){
	
		return res.status(500).json({error:"Unable to get the blogs",message:e.message});
	
	}
	
	return res.status(200).json(blogs);

})

module.exports = router;