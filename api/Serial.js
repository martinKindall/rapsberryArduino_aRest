'use strict';

var SerialPort = require("serialport");
// var port = new SerialPort("/dev/tty-usbserial1", {
//   baudRate: 57600
// });

var digital = function(pin, state){
	var digitalComand = "/digital/" + pin + "/" + state;
	console.log(digitalComand);
};

var analogPWM = function(pin, value){
	var pwmComand = "/analog/" + pin + "/" + value;
	console.log(pwmComand);
};

var tft = function(text){
	var textCommand = "/tft?params=" + text;
	console.log(textCommand);
};

module.exports = {
	digital : digital,
	analogPWM : analogPWM,
	tft : tft,
};