'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();

app.use('/', express.static('public'));
app.use(parser.json());

app.use('/api', router);

app.listen(3000, '192.168.50.11', function(){
	console.log("The frontend server is running on port 3000!")
});