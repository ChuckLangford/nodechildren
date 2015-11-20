var processes = require('./processmgr');
var notchild = require('./notchild')();

processes.newProcess.send({another: 'test'});

// Call the first function of notchild
notchild.test();

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
