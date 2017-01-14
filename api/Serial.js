'use strict';

var SerialPort = require("serialport");
var port = new SerialPort("/dev/ttyUSB0", {
  baudRate: 9600
}, function(err){
	if (err)
	{
		return console.log("Fallo");
	}

	console.log("Puerto serial abierto");
});

var digital = function(pin, state){
	var digitalComand = "/digital/" + pin + "/" + state;
	console.log(digitalComand);
};

var analogPWM = function(pin, value){
	var pwmComand = "/analog/" + pin + "/" + value;
	console.log(pwmComand);
};

var tft = function(text, res){
	var textCommand = "/tft?params=" + text + "\r";
	port.write(textCommand, function(err) {
	    if (err) {
	        console.log('Error on write: ', err.message);
			res.json({"data" : "LCD: " + err.message});
	    }
		res.json({"data" : "LCD: " + text});
	});
};

module.exports = {
	digital : digital,
	analogPWM : analogPWM,
	tft : tft,
};