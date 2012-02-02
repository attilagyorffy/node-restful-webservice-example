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
    response.render('show', {
      user: request.user,
    });
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
  load: function(name, callback) {
    callback(null, User.find_by_name(name))
  }
};