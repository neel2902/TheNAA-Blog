const express = require('express');

let router = express.Router();
let BlogsDao = require('../src/blogsDao.js');

router.get('/topBlogs/:postType?',async (req,res)=>{

	let topBlogs;

	try{
	
		topBlogs = await BlogsDao.getTopBlogs(req.params.postType);	
	
	}
	
	catch(e){
	
		return res.status(500).json({error:"Unable to get the blogs",message:e.message});
	
	}

	return res.status(200).json(topBlogs);

})

module.exports = router;