var apiController = require('./apiController.js');
var searchQuakes = require('./searchQuakes')
var helpers = require('./helpers.js');

module.exports = function (app, express) {
  // app.get('/:code', linksController.navToLink);

  // app.post('/api/users/signin', userController.signin);
  // app.post('/api/users/signup', userController.signup);
  // app.get('/api/users/signedin', userController.checkAuth);

  // authentication middleware used to decode token and made available on the request
  // app.use('/api/links', helpers.decode);
  //app.get('/api/links/', linksController.allLinks);
  app.post('/api/geocode/', function(req, res){
    apiController.getQuakes(req,res);
  });
  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

