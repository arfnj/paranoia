var searchQuakes = require('./searchQuakes.js');
var request = require('request');

module.exports = {

  getQuakes: function (req, res) {
    searchQuakes(req.body.zipCode, res, function(data) {
      res.send(data.features);
    });
  }

}

