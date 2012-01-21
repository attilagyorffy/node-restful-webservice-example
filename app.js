
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , Resource = require('express-resource');

var app = module.exports = express.createServer();

// Load application environment
require('./config/environment');

// Routes

app.get('/', routes.index);
app.resource('users', require('./app/controllers/users_controller'));

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
