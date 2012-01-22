var Users = [
  { id: 1, name: "Attila" },
  { id: 2, name: "Dain" },
  { id: 3, name: "Rob" }
];

module.exports = {
  find: function(id) {
    for (var i in Users) {
      var user = Users[i];
      if (user.id == id) {
        return user;
      }
    }
    return null;
  }
}