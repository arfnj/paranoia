var searchQuakes = require('./searchQuakes.js');
var request = require('request');

module.exports = {

  getQuakes: function (req, res) {
    searchQuakes(req.body.zipCode, res, function(data) {
      console.log('EVENTS =', data.features.length);
      res.send(data.features);
    });
  }

}

