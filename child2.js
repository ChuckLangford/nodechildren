var Redis = require('ioredis');
var redis = new Redis();

redis.subscribe('news', 'music', function (err, count) {
  console.log('we have subscribed to ' + count + ' channels.');
});

redis.on('message', function (channel, message) {
  // Receive message Hello world! from channel news
  // Receive message Hello again! from channel music
  console.log('2 - Receive message %s from channel %s', message, channel);
});
