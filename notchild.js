'use strict';

var processes = require('./processmgr');

module.exports = function() {
  // Communication via parent/child sending
  processes.newProcess.on('message', function(m) {
    console.log('PARENT received a message...');
    console.log(m);
  });

  processes.cp1.on('message', function(m) {
    console.log(m);
  });

  return {
    test: function() {
      console.log('This is the test function');
      setTimeout(function() {
        // Testing out the parent recovery system
        throw new Error ('PARENT DIED');
      }, 20000);
    }
  };
}
