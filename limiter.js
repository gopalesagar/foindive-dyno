const limiter = require('cpulimit');
const { childProcess } = require('child_process');

var options = {
    limit: 50,
    includeChildren: true,
    spawn: { command: 'node', args: ['runner.js'] }
};

console.log("Limiter Options: ", options)

limiter.createProcessFamily(options, function(err, processFamily) {
    if(err) {
        console.error('CPU Limiter Error:', err.message);
        return;
    }

    limiter.limit(processFamily, options, function(err) {
        if(err) {
          console.error('CPU Limiter Error:', err.message);
        } else {
          console.log('CPU Limiter Done.');
        }
    });
});
