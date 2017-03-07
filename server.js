var express = require('express');
var mongoose = require('mongoose');
var http = require('http');

var app = express();

// connect to mongo database named "shortly"
//mongoose.connect('mongodb://localhost/shortly');

// configure our server with all the middleware and routing
require('./server/config/middleware.js')(app, express);
require('./server/config/routes.js')(app, express);
// start listening to requests on port 8000
app.listen(8000);

// export our app for testing and flexibility, required by index.js
module.exports = app;

