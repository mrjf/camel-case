var sentence = require('sentence-case');

/**
 * Camel case a string.
 *
 * @param  {String} string
 * @return {String}
 */
module.exports = function (string) {
  return sentence(string).replace(/ (\w)/g, function (_, $1) {
    return $1.toUpperCase();
  });
};
