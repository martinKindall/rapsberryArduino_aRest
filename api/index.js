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

module.exports = router;