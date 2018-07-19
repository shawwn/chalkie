AnsiHTML = require('ansi-html');
Chalk = require('chalk');
Chalk.enabled = true;
Chalk.level = 2;
if (typeof module !== 'undefined') {
  module.exports = Chalk;
  module.exports.html = AnsiHTML;
}
