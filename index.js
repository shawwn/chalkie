AnsiHTML = require('ansi-html');
chalk = require('chalk');
chalk.enabled = true;
chalk.level = 2;
if (typeof module !== 'undefined') {
  module.exports = chalk;
  module.exports.html = ansiHTML;
}
