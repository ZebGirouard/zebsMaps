var express = require('express');
var app = express();
var path = require('path');

app.get('/woahwoah', function(req, res) {
	res.send("Woah woah!");
});

app.use(express.static(path.join(__dirname, 'client')));

app.listen(process.env.PORT || 3000);