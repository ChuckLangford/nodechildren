var Redis = require('ioredis');
var pub = new Redis();

// This child is the only one that is sending out Redis based messages.  The
// other two sibling process will subscribe to these channels.
setTimeout(function() {
  pub.publish('news', 'Hello world!');
  pub.publish('music', 'Hello again!');
}, 2000);
