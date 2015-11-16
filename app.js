var newProcess = require('child_process').fork('./childtest.js');
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
