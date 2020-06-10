'use strict';

const path = require('path');

const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const session = require('express-session');
require('dotenv').config();

let BlogsDao = require(path.join(__dirname,'src','blogsDao.js'));
let AuthorDao = require(path.join(__dirname,'src','authorDao.js'));

let app = express();

const port = process.env.PORT || 5000;

console.log('redis url = ',process.env.REDISCLOUD_URL);

MongoClient.connect(

  process.env.NAA_DB_URI,

  { 
  	useNewUrlParser: true,
  	useUnifiedTopology: true
  })
  .catch(err => {
    
    console.error(err.stack)
    
    process.exit(1)
  })
  .then(async client => {
    
	await BlogsDao.injectDB(client);

	await AuthorDao.injectDB(client);
    
	app.use(helmet());

	app.use(cors());
  	
	process.env.NODE_ENV !== 'production' && app.use(logger('combined'));
  	
	app.set('trust proxy', 1) // trust first proxy to enable react app

	app.use(session({
 	      secret: process.env.SESSION_SECRET,
 	      resave: false,
 	      saveUninitialized: true,
	}))
    
	app.use(bodyParser.json());
  	
 	app.use(bodyParser.urlencoded({ extended: false }));
  
    	app.use(require(path.join(__dirname,'routes','addBlog.js')));

  	app.use(require(path.join(__dirname,'routes','getBlog.js')));

  	app.use(require(path.join(__dirname,'routes','getBlogs.js')));

  	app.use(require(path.join(__dirname,'routes','getTopBlogs.js')));

	app.use(require(path.join(__dirname,'routes','addAuthor.js')));

	app.use(require(path.join(__dirname,'routes','login.js')));

  	app.use(express.static(path.join(__dirname,'public')));

	if (process.env.NODE_ENV === 'production') {
  		// Serve any static files
  		app.use(express.static(path.join(__dirname, 'client/build')));
    
  		// Handle React routing, return all requests to React app
  		app.get('*', function(req, res) {
    
    		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  	  	
  		});
	}

	app.listen(port, () => {
    		console.log(`listening on port ${port}`)
    	})
  
  })
