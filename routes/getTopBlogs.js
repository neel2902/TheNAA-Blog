const express = require('express');

let router = express.Router();
const path = require('path');

let BlogsDao = require(path.join(__dirname,'..','src','blogsDao.js'));

var redis = require('redis');

var redisURL = url.parse(process.env.REDISCLOUD_URL);
var client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
client.auth(redisURL.auth.split(":")[1]);

router.get('/topBlogs/:postType?',(req,res)=>{

	let topBlogs;

	client.get(req.originalUrl),async (err,reply)=>{
		if(err || !reply)
		{

			try{
			
				topBlogs = await BlogsDao.getTopBlogs(req.params.postType);	
			
			}
			
			catch(e){
			
				return res.status(500).json({error:"Unable to get the blogs",message:e.message});
			
			}

			client.set(req.originalUrl,JSON.stringify(topBlogs));
			return res.status(200).json(topBlogs);
		}
		else
		{
			return res.status(200).json(reply.toString());
		}
	}
})

module.exports = router;
