'use strict';

var express = require('express');

var router = express.Router();

router.get('/prueba', function(req, res) {
	var arreglo = [
		{
			"casa1" : 1
		},
		{
			"casa2" : 2
		}
	];
	res.json(arreglo);
});

router.post('/datos', function(req, res) {
	var data = req.body.data;
	console.log(data);
	res.json(data);
});

module.exports = router;