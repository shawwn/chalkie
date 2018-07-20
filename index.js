ansiHTML = require('shawwn-ansi-html');
stripAnsi = require('strip-ansi');
chalk = require('chalk');
chalk.enabled = true;
chalk.level = 3;
if (typeof module !== 'undefined') {
  module.exports = chalk;
  module.exports.ansiHTML = ansiHTML;
  module.exports.stripAnsi = stripAnsi;
}
