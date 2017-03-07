var searchQuakes = require('./searchQuakes.js');

module.exports = {

  getQuakes: function (req, res) {
    var zip = req.body.zip;
    searchQuakes(zip, res, function(data) {
      console.log('EVENTS =', data.features.length);
      res.send(data.features);
    });
  }

}

