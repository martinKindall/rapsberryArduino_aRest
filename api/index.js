'use strict';

var express = require('express');

var config = require('../config/constants');

var router = express.Router();

router.get('/config', function(req, res){
	res.json({"data" : config});
});

module.exports = router;