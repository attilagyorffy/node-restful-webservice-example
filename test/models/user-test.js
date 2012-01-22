var vows    = require('vows'),
    assert  = require('assert'),
    User    = require('../../app/models/user'),
    util    = require('util');

vows.describe('User').addBatch({
  '.find': {
    topic: User,
    'with a valid id': {
      'should return an instance of User': function(topic) {
        var record = topic.find(1);
        assert.ok(record instanceof User); // breaks with: TypeError: Expecting a function in instanceof check, but got #<User>
      },
      'should return the correct record': function(topic) {
        var record = topic.find(1);
        assert.equal(record.id, 1);
        assert.equal(record.name, 'Attila');
      }
    },
    'with an invalid id': function(topic) {
      var actual = topic.find('invalid');
      assert.equal(actual, null);
    }
  }
}).exportTo(module);
