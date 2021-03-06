var express = require('express');
var mongoose = require('mongoose');
var http = require('http');
var path = require('path');

var app = express();
var port = process.env.PORT || 8000

// connect to mongo database named "shortly"
//mongoose.connect('mongodb://localhost/shortly');

// configure our server with all the middleware and routing
require(__dirname+'/Server/Config/middleware.js')(app, express);
require(__dirname+'/Server/Config/routes.js')(app, express);
// start listening to requests on port 8000
app.listen(port);

// export our app for testing and flexibility, required by index.js
module.exports = app;


