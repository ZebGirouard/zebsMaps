require('dotenv').config();
var express = require('express');
var app = express();
var path = require('path');
var passport = require('passport');
app.use(passport.initialize());

//Test comment

require('./config/passport')(passport);
// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
app.get('/auth/facebook', function() {
    console.log("Trying facebook auth");
    passport.authenticate('facebook', { scope : 'email' });
});

// handle the callback after facebook has authenticated the user
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect : '/',
        failureRedirect : '/'
    }));

// route for logging out
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

app.use(express.static(path.join(__dirname, 'client')));
app.use(function(req, res){
   res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(process.env.PORT || 3000, function() {console.log("starting server");});