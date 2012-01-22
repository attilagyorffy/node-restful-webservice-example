var app = require('../server');
var express = require('express');

app.configure(function(){
  app.set('views', __dirname + '/../app/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// TODO: Make this auto-require all .js files under ./environments
require('./environments/development');
require('./environments/production');