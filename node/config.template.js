// Copy this file to config.js and fill in the config
var config = {}
config.isy = {};

config.computercraft_time_file = "C:/minecraft_server/world/computer/1/ingametime.out";

config.isy.host = "isy";
config.isy.port = 80;
config.isy.username = "username"
config.isy.password = "password"

config.isy.time_var_id = 1 // The ID of the integer variable that holds the in-game time
config.isy.update_state_id = 1 // The ID of the STATE variable that the ISY uses to know when the time has been updated

module.exports = config;