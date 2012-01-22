var User = require('../models/user');
var util = require('util');

module.exports = {
  index: function(request, response) {
    response.send('users#index');
  },

  new: function(request, response) {
    response.send('users#new');
  },

  create: function(request, response) {
    response.send('users#create');
  },

  show: function(request, response) {
    var user = util.inspect(request.user);
    response.send('users#show: ' + user);
  },

  edit: function(request, response) {
    var user = util.inspect(request.user);
    response.send('users#edit: ' + user);
  },

  update: function(request, response) {
    response.send('users#update');
  },

  destroy: function(request, response) {
    response.send('users#destroy');
  },
  load: function(id, callback) {
    callback(null, User.find(id))
  }
};