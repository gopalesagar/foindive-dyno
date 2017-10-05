const CoinHive = require('coin-hive');
const LCDPLATE = require('adafruit-i2c-lcd').plate;
const lcd = new LCDPLATE(1, 0x20);

lcd.backlight(lcd.colors.WHITE);
lcd.clear();

(async () => {

  // Create miner
  const miner = await CoinHive('3HxgYhsNTsbLJSSTfUIMVRVvVdf3AJVt'); // Coin-Hive's Site Key

  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => {
    lcd.backlight(lcd.colors.YELLOW);
    console.log('Found!')
  })
  
  miner.on('accepted', () => {
    lcd.backlight(lcd.colors.GREEN);
    console.log('Accepted!')
  })

  miner.on('update', data => {
    lcd.clear();
    lcd.message(`${data.hashesPerSecond} / s`);
    console.log(`
      Hashes per second: ${data.hashesPerSecond}
      Total hashes: ${data.totalHashes}
      Accepted hashes: ${data.acceptedHashes}
    `)
  });

  // Stop miner
  //setTimeout(async () => await miner.stop(), 60000);
})();
