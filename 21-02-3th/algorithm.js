const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  console.log(line);
  const [x, y, w, h] = line.split(' ');

  const x2 = w - x;
  const y2 = h - y;

  console.log(Math.min(x, y, x2, y2))

  rl.close();
}).on("close", function() {
  process.exit();
});

