const { spawn } = require('child_process');
const limiter = require('cpulimit');

function run(file, params, callback) {
    var arguments = [file].concat(params)
    var command = spawn('node', arguments, {
      stdio: 'inherit',
      shell: true
    });

    var result = '';
    command.on('close', function(code) {
      return callback(result);
    });
}

run("runner.js", [], function(pid) {
  
});
