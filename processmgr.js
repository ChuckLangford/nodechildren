'use strict';

var cp = require('child_process');

function fork(file) {
  var newChild = cp.fork(file);
  newChild.on('close', function(code, signal) {
    console.log('code: ' + code);
    fork(file);
  });
  return newChild;
}

function killAll() {
  np.kill();
  c1.kill();
  c2.kill();
  c3.kill();
}

var np = fork('./childtest.js');
var c1 = fork('./child1.js');
var c2 = fork('./child2.js');
var c3 = fork('./child3.js');

module.exports = {
    newProcess: np,
    cp1: c1,
    cp2: c2,
    cp3: c3,
    killProcesses: killAll
}
