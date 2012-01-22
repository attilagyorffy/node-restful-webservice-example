var vows    = require('vows'),
    assert  = require('assert'),
    User    = require('../../app/models/user');

vows.describe('User').addBatch({
  '.find': {
    topic: User,
    'with a valid id': function(topic) {
      var expected = { id: 1, name: "Attila" };
      var actual = topic.find(1)
      assert.equal(actual, expected);
    },
    'with an invalid id': function(topic) {
      var actual = topic.find('invalid');
      assert.equal(actual, null);
    }
  }
}).exportTo(module);
