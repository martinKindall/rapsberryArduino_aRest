'use strict';

var SerialPort = require("serialport");
var port = new SerialPort("/dev/ttyUSB0", {
  baudRate: 9600
}, function(err){
	if (err)
	{
		return console.log("Fallo");
	}
});

port.on('open', function() {
	console.log("abierto");
	setTimeout(function(){
		port.write("/tft?params=probandoNode\r", function(err) {
		    if (err) {
		      return console.log('Error on write: ', err.message);
		    }
		    console.log('message written');
		});
		port.on('data', function(data){
			console.log("Arduino data: " + data);
		});
	}, 5000);
});



var digital = function(pin, state){
	var digitalComand = "/digital/" + pin + "/" + state;
	console.log(digitalComand);
};

var analogPWM = function(pin, value){
	var pwmComand = "/analog/" + pin + "/" + value;
	console.log(pwmComand);
};

var tft = function(text){
	var textCommand = "/tft?params=" + text + "\r";
	console.log(textCommand);
	port.on('open', function() {
		console.log("abierto");
		port.write(textCommand, function(err) {
		    if (err) {
		      return console.log('Error on write: ', err.message);
		    }
		    console.log('message written');
		});
	});

	port.on('error', function(err) {
	  console.log('Error: ', err.message);
	});
};

module.exports = {
	digital : digital,
	analogPWM : analogPWM,
	tft : tft,
};