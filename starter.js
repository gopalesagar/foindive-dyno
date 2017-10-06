const { spawn } = require('child_process');
const limiter = require('cpulimit');

function run(file, params, callback) {
    var arguments = [file].concat(params)
    var command = spawn('node', arguments, {
      shell: true
    });

    command.stdout.setEncoding('utf8')
    command.stdout.on('data', function(pid) {
      var options = {
          limit: 50,
          includeChildren: true,
          pid: pid.trim()
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
    });

    command.on('close', function(code) {
      return callback(`Close: ${code}`);
    });
}

run("runner.js", [], function(result) {
  console.log(`Result runner.js: ${result}`)
});
