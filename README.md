# chalk.js

[Chalk](//github.com/chalk/chalk) for the browser.

## Demo

To see a demo, run `yarn && yarn start`.

## Install

```
npm install chalk.js
```

then the example code below.

## Example

```html
<html>
  <body>
    <script src="node_modules/chalk.js/chalk.js"></script>

    <!-- How to manually create HTML elements from Chalk strings -->
    <div id="code">
    </div>
    <script>
      var html = AnsiHTML(Chalk.magenta.bold.italic.underline("Hello from HTML!"));
      document.getElementById("code").innerHTML = html;
    </script>

    <!-- How to use Chalk with xterm.js -->
    <link rel="stylesheet" href="node_modules/xterm/dist/xterm.css" />
    <script src="node_modules/xterm/dist/xterm.js"></script>

    <div id="terminal">
    </div>
    <script>
      var term = new Terminal();
      term.open(document.getElementById('terminal'));
term.write(`${Chalk.red("Hello")} from ${Chalk.bold.underline.bgCyanBright.black('xterm.js')} !`);
    </script>
  </body>
</html>
```
