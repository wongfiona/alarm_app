// DarkSky API
// CORS requests are NOT allowed by the DarkSky server
// Requests from other Servers are allowed
// So, we would make a pass thru file on a server.
// Browser sends the fetch( ) AJAX request to OUR server
// OUR server sends the AJAX request to DarkSky server
// DarkSky responds to OUR Server
// OUR Server sends the DarkSky reply back to Browser
// Browser AJAX call => Our Server => DarkSky => Our Server => Browser AJAX call

// To simulate, we will make the call with NodeJS (outside a browser)
// this way, we can avoid the CORS issue.
// It requires installing node-fetch from the terminal
//  npm install node-fetch
// Then add a require statement at the top of our script

var data1 = require('../data.json');
//let fetch = require('node-fetch');
const https = require('https');

//pushes data to json file
exports.addWeather = function(request, response){
  var lat = request.query.latitude;
  var lng = request.query.longitude;
  var city = request.query.citySearch;
  console.log(city);
  //let uri = 'http://jsonplaceholder.typicode.com/users';
  let darksky = 'https://api.darksky.net/forecast/';
  let key = 'b81e06b8089192d46b4f2ec270e18be6';
  let uri = darksky + key + '/' + lat +','+ lng;
  console.log(uri);
  uri = uri.concat('?units=ca&exclude=minutely,hourly');
  https.get(uri, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
      body["location"] = city;
      data1.weather.push(body);
      console.log(body)
    });
    response.render('weather',data1);
  });
}
