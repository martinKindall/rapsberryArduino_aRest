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

var digital = function(pin, state, res){
	var states = {
		"1" : "HIGH",
		"0" : "LOW"
	};
	var digitalComand = "/digital/" + pin + "/" + state + "\r";
	port.write(digitalComand, function(err) {
	    if (err) {
	        console.log('Error on write: ', err.message);
			res.json({"data" : "LED: " + err.message});
	    }
		res.json({"data" : "LED set to: " + states[state]});
	});
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