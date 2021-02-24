// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const input =
  `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`.split('\n')
const cases = input.shift();

for(let i = 0; i < cases; i++) {
    const scores = input[i].split(' ').map(r => +r);
    const sc = scores.shift();

    const avg = scores.reduce((acc,cur) => {
        return acc + cur
    },0);

    const above = scores.filter(r => r > avg / sc)
    console.log(`${(above.length / sc * 100).toFixed(3)}%`);
}
