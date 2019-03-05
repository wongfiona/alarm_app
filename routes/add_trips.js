var data = require('../data.json');
exports.addTrip = function(request, response){
  var start = request.query.origin;
  var end = request.query.destination;

  console.log(start);
  console.log(end);

  var new_data =
  {
    "origin": start,
    "destination": end,
  };

  data.trips.push(new_data);
  response.render('trips',data);
}
