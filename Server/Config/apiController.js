var searchQuakes = require('./searchQuakes.js');

module.exports = {

  quakeData: {},

  getQuakes: function (req, res) {
    var zip = '07003';
    searchQuakes(zip, res, function(data) {
      console.log('EVENTS =', data.features.length);
      res.send(data.features);
    });
  }

}

