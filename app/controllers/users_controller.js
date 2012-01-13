module.exports = {
  index: function(request, response) {
    response.send('index');
  },

  new: function(request, response) {
    response.send('new');
  },

  create: function(request, response) {
    response.send('create');
  },

  show: function(request, response) {
    response.send('show');
  },

  edit: function(request, response) {
    response.send('edit');
  },

  update: function(request, response) {
    response.send('update');
  },

  destroy: function(request, response) {
    response.send('destroy');
  }
};