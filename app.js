'use strict';

var express = require('express');
var router = require('./api');

var app = express();

app.use('/', express.static('public'));
app.use('/api', router);

// Rest
var rest = require("arest")(app);

rest.addDevice('serial','/dev/ttyUSB0', 9600);

app.listen(3000, '192.168.50.11', function(){
	console.log("The frontend server is running on port 3000!")
});