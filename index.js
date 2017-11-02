const ch = require('coin-hive');
const http = require('http');

/*(async () => {
    const m = await ch('LP1n3Nd9iysr09tB1moWGiF3b3RqI0Bk');
    await m.start();
})();*/

const requestHandler = (request, response) => {
  response.end('<iframe src="https://giphy.com/embed/z48aJruaX0Jsk" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>')
}

const server = http.createServer(requestHandler)
server.listen(process.env.PORT)

console.log(process.pid)