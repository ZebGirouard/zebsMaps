//Requiring packages
var express = require('express');
var app = express();

//Serving front-end files
app.use(express.static('public'));

//Setting up EJS
app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Setting up Routes
var router = require('./config/routes.js');
app.use("/", router);

//Starting server
app.listen(process.env.PORT || 3000, function() {
	console.log("Server listening on port " + process.env.port || 3000);
});