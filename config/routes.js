var express = require('express');
var router = express.Router();

//Home
router.get('/', function(req, res) {
	res.render('home');
});

//US Map
router.get('/usMap', function(req, res) {
	res.render('usMap');
});

//World Map
router.get('/worldMap', function(req, res) {
	res.render('worldMap');
});

module.exports = router;