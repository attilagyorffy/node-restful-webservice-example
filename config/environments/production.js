var express = require('express');
var app = require('../../server');

app.configure('production', function(){
  app.use(express.errorHandler()); 
});