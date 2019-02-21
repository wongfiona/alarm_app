//gets the json data to display
var data = require('../data.json');

//displays json data to alarms page
exports.view = function(req, res){
  res.render('alarms', data);
};
