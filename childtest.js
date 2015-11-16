exports.sleep = sleep;
function sleep() {
  sleeper(5000, function() {
    console.log('DONE');
  });
}

function sleeper(time, callback) {
  var stop = new Date().getTime();
  while(new Date().getTime() < stop + time) {
    ;
  }
  callback();
}

sleep();
