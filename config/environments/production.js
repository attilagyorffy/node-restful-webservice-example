var express = require('express');
var app = require('../../app');

app.configure('production', function(){
  app.use(express.errorHandler()); 
});