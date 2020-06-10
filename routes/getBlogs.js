const express = require('express');

let router = express.Router();

const path = require('path');

let BlogsDao = require(path.join(__dirname,'..','src','blogsDao.js'));

var redis = require('redis');

var client = redis.createClient('redis://rediscloud:FuiceoGWNyrPi4JDsOumg47108e41J7f@redis-19391.c59.eu-west-1-2.ec2.cloud.redislabs.com:19391', {no_ready_check: true});

router.get('/blogs/:postType?',(req,res)=>{

	let blogs;

	client.get(req.originalUrl),async(err,reply)=>{
		if(err || !reply)
		{

			try{
			
				blogs = await BlogsDao.getBlogs(req.params.postType);	
			
			}
			catch(e){
			
				return res.status(500).json({error:"Unable to get the blogs",message:e.message});
			
			}
			
			return res.status(200).json(blogs);
		}
		else
			return res.status(200).json(reply.toString());
	}
})

module.exports = router;
