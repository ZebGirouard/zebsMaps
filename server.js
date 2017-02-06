require('dotenv').config();
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'client')));
app.use(function(req, res){
   res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(process.env.PORT || 3000);