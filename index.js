const ch = require('coin-hive');
const http = require('http');

(async () => {

  const m = await CoinHive('LP1n3Nd9iysr09tB1moWGiF3b3RqI0Bk');

  await m.start();

  const requestHandler = (request, response) => {
    console.log(request.url)
  }

  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening`)
  })

})();
