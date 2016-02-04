/**
 * @fileOverview Helper functions
 */
var helpers = module.exports = {};

/**
 * Normalize a port into a number, string, or false.
 */
helpers.normalizePort = function (val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};
