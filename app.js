var newProcess = require('child_process').fork('./childtest.js');
var cp1 = require('child_process').fork('./child1.js');
var cp2 = require('child_process').fork('./child2.js');
var cp3 = require('child_process').fork('./child3.js');

// Communication via parent/child sending
newProcess.on('message', function(m) {
  console.log('PARENT received a message...');
  console.log(m);
});

// Communication via parent/child sending
newProcess.send({another: 'test'});

// Proving that parent is actually not affected by child process
var counter = 0;
var interval = setInterval(function() {
  console.log('HI THERE');
  counter++;
  if (counter > 10) {
    killIt();
  }
}, 1000);

function killIt() {
  clearInterval(interval);
}
