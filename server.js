'use strict'
// requiring dependencies
const express = require('express'),
	app = express(),
	router = express.Router(),
	pageRouter = require('./config/routes.js');

// for express to use on backend routing
app.use(express.static('public'));

//CATCH ALL ROUTES
app.get('/', function(req,res){
	res.sendfile(__dirname + '/public/index.html');
});

// LISTEN ON PORT
app.listen(process.env.PORT || 3000, ()=> {
	console.log('listening on port 3000');
});