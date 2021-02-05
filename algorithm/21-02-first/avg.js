// 5
// 5 50 50 70 80 100                40.000%
// 7 100 95 90 80 70 60 50          57.143%
// 3 70 90 80                       33.333%
// 3 70 90 81                       66.667%
// 9 100 99 98 97 96 95 94 93 91    55.556%
/*
const caseCount = 5;
const studentsCount = [5,7,3,3,9];
const scores = [
  [50,50,70,80,100],
  [100,95,90,80,70,60,50],
  [70,90,80],
  [70,90,81],
  [100,99,98,97,96,95,94,93,91]
];

function fn(caseCount) {
    for(let i = 0; i < caseCount; i++) {
        const avg = scores[i].reduce((acc,cur) => {
           return acc + cur
        },0);

        const above = scores[i].filter(r => r > avg / studentsCount[i])
        console.log((above.length / studentsCount[i] * 100).toFixed(3))
    }
} */

// 케이스의 개수
const caseCount = Math.floor(Math.random() * 100 + 1);

function fn(caseCount) {
    for(let i = 0; i < caseCount; i++) {
        const studentsCount = Math.floor(Math.random() * 1000 + 1);

        // 얘가 조금 빠름
        const scores = new Array(studentsCount).fill(1).map((r) => r * Math.floor(Math.random() * 101) );
        
        // 얘가 조금 느림
        // const scores = Array.from({ length: studentsCount }, () => Math.floor(Math.random() * 101));

        const avg = scores.reduce((acc,cur) => {
            return acc + cur
        },0);

        const above = scores.filter(r => r > avg / studentsCount)
        console.log((above.length / studentsCount * 100).toFixed(3))
    }
}


console.time('a')
fn(caseCount)
console.timeEnd('a')