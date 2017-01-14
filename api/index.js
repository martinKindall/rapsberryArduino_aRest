'use strict';

var express = require('express');

var config = require('../config/constants');
var serial = require('./Serial');

var router = express.Router();

router.get('/config', function(req, res){
	res.json({"data" : config});
});

router.get('/digital/' + config.LED + '/:toggle', function(req, res) {
	var toggle = req.params.toggle;
	serial.digital(config.LED, toggle, res);
});

router.get('/analog/' + config.PWM + '/:pwm', function(req, res) {
	var pwm = req.params.pwm;
	serial.analogPWM(config.PWM, pwm, res);
});

router.get('/lcd/:texto', function(req, res) {
	var texto = req.params.texto;
	serial.tft(texto, res);
});


// just as example, currently not used 
router.post('/datos', function(req, res) {
	var data = req.body.data;
	console.log(data);
	res.json(data);
});

module.exports = router;