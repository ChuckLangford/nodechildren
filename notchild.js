'use strict';

var processes = require('./processmgr');

module.exports = function() {
  // Communication via parent/child sending
  processes.newProcess.on('message', function(m) {
    console.log('PARENT received a message...');
    console.log(m);
  });

  return {
    test: function() {
      console.log('This is the test function');
    }
  };
}
