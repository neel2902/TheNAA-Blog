const express = require('express');

let router = express.Router();

const path = require('path');

let BlogsDao = require(path.join(__dirname,'..','src','blogsDao.js'));
var url = require('url');
var redis = require('redis');

var redisURL = url.parse(process.env.REDISCLOUD_URL);
var client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
client.auth(redisURL.auth.split(":")[1]);

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
			
			client.set(req.originalUrl,JSON.stringify(blogs));
			return res.status(200).json(blogs);
		}
		else
			return res.status(200).json(reply.toString());
	}
})

module.exports = router;
