//gets the data
var data = require('../data.json');

//Adds an alarm to the json file then calls alarm page
exports.addAlarm = function(request, response) {
  //need to get form info here
  var time = request.query.time;
  var message = request.query.description;
  //json object to push
  var new_data =
  {
    "alarmName": message,
    "alarmTime": time,
    "alarmID":""
  };
  data.alarms.push(new_data);
  response.render('alarms',data);
}
