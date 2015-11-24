var cluster = require('cluster');

if (cluster.isMaster) {
  console.log('FORKING...');
  cluster.fork();

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
    console.log('NEW FORK...');
    cluster.fork();
  });
} else {
  var processes = require('./processmgr');
  var notchild = require('./notchild')();

  processes.newProcess.send({another: 'test'});

  process.on('exit', function() {
    processes.killProcesses();
  });

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
}
