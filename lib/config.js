/*
 * Loads a JSON config file and returns a Javascript object with all its keys and values.
*/

var path = require("path")
  , fs = require('fs');

module.exports = function() {
  var config_file = path.join(__dirname, "../application.json");
  return JSON.parse(fs.readFileSync(config_file).toString());
};
