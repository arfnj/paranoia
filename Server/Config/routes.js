var apiController = require('./apiController.js');
var searchQuakes = require('./searchQuakes')
var helpers = require('./helpers.js');

module.exports = function (app, express) {
  app.post('/api/geocode/', function(req, res){
    apiController.getQuakes(req,res);
  });
  // app.post('/api/geocode/', apiController.getQuakes);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

