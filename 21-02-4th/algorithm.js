// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`.split('\n');
const count = +input.shift();

for(let i = 0;i < count; i++) {
  const oxArr = input[i].split('');
  let step = 1;
  let score = 0;

  oxArr.reduce((acc, cur) => {
    if(cur === 'O') {
      if(acc === cur) step++;
      score += step;
    } else {
      step = 1;
    }
    return cur;
  },'')

  console.log(score);
}

