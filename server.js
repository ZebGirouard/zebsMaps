//Requiring packages
var express = require('express');
var app = express();
require('dotenv').config();

//Serving front-end files
app.use(express.static('public'));

//Setting up EJS
app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Setting up Routes
var router = require('./config/routes.js');
app.use("/", router);
app.use(function(req, res){
   res.sendFile(__dirname + '/public/index.html');
});

//Starting server
app.listen(process.env.PORT, function() {
	console.log("Server listening on port " + process.env.PORT);
});