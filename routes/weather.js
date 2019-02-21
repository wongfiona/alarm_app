//gets the get json data to display
var data = require("../data.json");

//display the data cards
exports.view = function(req, res){
  res.render('weather', data);
};
