'use strict';

var express = require('express');

var router = express.Router();

router.get('/digital/8/:toggle', function(req, res) {
	var toggle = req.params.toggle;
	var states = {
		"1" : "HIGH",
		"0" : "LOW"
	};
	res.json({"data" : "LED set to: " + states[toggle]});
});

router.get('/analog/11/:pwm', function(req, res) {
	var pwm = req.params.pwm;
	res.json({"data" : "PWM set to: " + pwm});
});

router.get('/lcd/:texto', function(req, res) {
	var texto = req.params.texto;
	res.json({"data" : "LCD: " + texto});
});


// just as example, currently not used 
router.post('/datos', function(req, res) {
	var data = req.body.data;
	console.log(data);
	res.json(data);
});

module.exports = router;