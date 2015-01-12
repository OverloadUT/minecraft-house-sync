fs = require('fs')
http = require('http')
Q = require('q')

var config = require('./config')

fs.watchFile(config.computercraft_time_file, function (curr, prev) {
  fs.readFile(config.computercraft_time_file, 'utf8', function (err, data) {
    if(err) {
      console.log("Error reading file");
      console.log(err);
    } else {
      // The file timestamp was updated
      // Send update to ISY

      // Time from Minecraft is in "12.345" format. We need to convert it to an integer.
      servertime = Number(data) * 1000;
      servertime = ~~servertime;
      if (servertime < 0 || servertime > 24000) {
        console.log("Bad time detected. Skipping: " + servertime)
      } else {
        console.log("File changed. New time: " + servertime)
        sendTimeToISY(servertime).then(function() {
          var options = {
            'hostname': config.isy.host,
            'port': config.isy.port,
            'path': '/rest/vars/set/2/'+config.isy.update_state_id+'/1',
            'auth': config.isy.username+':'+config.isy.password,
          }
          http.get(options, function(res) {
            if(res.statusCode == 200) {
              console.log("Sent update signal to ISY!")
            }
          });
        });
      }
    }
  });
});


function sendTimeToISY(time) {
    var deferred = Q.defer();
    var options = {
      'hostname': config.isy.host,
      'port': config.isy.port,
      'path': '/rest/vars/set/1/'+config.isy.time_var_id+'/' + String(time),
      'auth': config.isy.username+':'+config.isy.password,
    }
    http.get(options, function(res) {
      if(res.statusCode != 200) {
        console.log("Got error from ISY: " + res.statusCode);
        deferred.error(res);
      } else {
        console.log("Updated time on ISY");
        deferred.resolve();
      }
    })
    return deferred.promise;
}