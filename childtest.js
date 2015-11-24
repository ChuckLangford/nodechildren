// The only purpose of this module is to prove that it doesn't interfer
// with it's parent.  We're purposefully blocking the node process.
exports.sleep = sleep;
function sleep() {
  sleeper(5000, function() {
    console.log('DONE');
    // throw new Error('Oh noes!');
  });
}

function sleeper(time, callback) {
  var stop = new Date().getTime();
  while(new Date().getTime() < stop + time) {
    ;
  }
  process.send({test: 'value'});
  callback();
}

sleep();

// Communication with the parent via the parent/child .send()
process.on('message', function(m) {
  console.log('CHILD received a message...');
  console.log(m);
});
