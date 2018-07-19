# chalk.js

[Chalk](//github.com/chalk/chalk) for the browser. Useful with [xterm.js](//github.com/xtermjs/xterm.js).

## Demo

[Live demo](https://rawgit.com/shawwn/chalk.js/master/index.html)

![image](https://user-images.githubusercontent.com/59632/42915514-0127d3b4-8ac6-11e8-828b-c350ed885a7b.png)

To see the demo locally, run `yarn && yarn start`.

## Using chalk.js

```
<script src="https://unpkg.com/chalk.js@latest/chalk.js"></script>
```

Then use `Chalk` from anywhere in your code:
```
console.log(Chalk.red("foo"))
```

To convert to HTML, you can call `AnsiHTML` and pass in a chalk string:
```
document.body.innerHTML = AnsiHTML(Chalk.red("foo"));
```

## Example

See the [source code](https://github.com/shawwn/chalk.js/blob/master/index.html) of the [live demo](https://rawgit.com/shawwn/chalk.js/master/index.html):
```html
<html>
  <body>
    <script src="https://unpkg.com/chalk.js@latest/chalk.js"></script>

    <!-- How to manually create HTML elements from Chalk strings -->
    <div id="code">
    </div>
    <script>
      var html = AnsiHTML(Chalk.magenta.bold.italic.underline("Hello from HTML!"));
      document.getElementById("code").innerHTML = html;
    </script>

    <!-- How to use Chalk with xterm.js -->
    <script src="https://unpkg.com/xterm@latest/dist/xterm.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/xterm@latest/dist/xterm.css" />

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

