
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var login = require('./routes/login');
var index = require('./routes/index');
var indexB = require('./routes/indexB');

var alarms = require('./routes/alarms');
var weather = require('./routes/weather');
var trips = require('./routes/trips');

var add_alarm = require('./routes/add_alarm');
var add_weather = require('./routes/add_weather');
var add_trip = require('./routes/add_trips');

var new_alarm = require('./routes/new_alarm');
var new_weather = require('./routes/new_weather');
var new_trips = require('./routes/new_trips');
//var add_weather = require('./routes/add_weather');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/indexA', index.view);
app.get('/indexB', indexB.view);

app.get('/index.html', indexB.view);

app.get('/', login.view);
app.get('/alarms.html', alarms.view);
app.get('/trips.html',trips.view);
app.get('/weather.html', weather.view);

app.get('/add_alarm', add_alarm.addAlarm);
app.get('/...', login.view);

app.get('/new_weather.html',new_weather.view);
app.get('/new_alarm.html',new_alarm.view);
app.get('/new_trips.html', new_trips.view);

app.get('/add_weather', add_weather.addWeather);
app.get('/add_trip', add_trip.addTrip);

//For A/B testing
app.get('/indexB', indexB.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
