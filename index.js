'use strict';

const path = require('path');

const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

let BlogsDao = require('./src/blogsDao.js');

let app = express();

const port = process.env.PORT || 5000

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
    
    app.use(helmet());
  	
  	process.env.NODE_ENV !== 'production' && app.use(logger('combined'));
  	
  	app.use(bodyParser.json());
  	
  	app.use(bodyParser.urlencoded({ extended: false }));
  
  	app.use(require('./routes/addBlog.js'));

  	app.use(require('./routes/getBlog.js'));

  	app.use(require('./routes/getBlogs.js'));

  	app.use(require('./routes/getTopBlogs.js'));

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