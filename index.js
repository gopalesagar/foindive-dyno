const ch = require('coin-hive');
const http = require('http');

(async () => {

  const m = await ch('dxNo2OhEyTCX5pMQYGoQdKL49JvPQmAU');

  await m.start();

  const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('CH Dyno')
  }

  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening`)
  })

})();
