var apiController = require(__dirname+'/apiController.js');
var searchQuakes = require(__dirname+'/searchQuakes')
var helpers = require(__dirname+'/helpers.js');

module.exports = function (app, express) {
  app.post('/api/geocode/', apiController.getQuakes);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

