let left = 0;
let state = '바위';

const interval = setInterval(() => {
  if (left === 0) {
    left = '-142px';
    state = '가위'
  } else if (left === '-142px') {
    left = '-284px';
    state = '보';
  } else {
    left = 0;
    state = '바위';
  }

  document.querySelector('#computer').style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${left} 0`;
}, 100);

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click',function() {
    clearInterval(interval)
    alert(`computer: ${state}, you: ${this.innerText}`)
  })
})

