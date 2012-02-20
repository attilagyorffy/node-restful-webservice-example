var vows    = require('vows'),
    assert  = require('assert'),
    User    = require('../../app/models/user'),
    util    = require('util');

vows.describe('User').addBatch({
  '.find': {
    topic: User,
    'with a valid id': {
      'should return the correct record': {
        topic: function(topic) {
          return topic.find(1);
        },
        'should return an instance of User': function (record) {
          assert.instanceOf(record, User);
          this.callback();
        },
        'should return the correct record': function(record) {
          assert.equal(record.id, 1);
          assert.equal(record.name, 'Attila');
          this.callback();
        }
      }
    },
    'with an invalid id': function(topic) {
      var actual = topic.find('invalid');
      assert.equal(actual, null);
      this.callback();
    }
  }
}).exportTo(module);
