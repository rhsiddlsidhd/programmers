const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = fs.readFileSync(file).toString().trim();

let answer = [];
if (input === 0) {
  return 1;
}

for (let i = 1; i <= input; i++) {
  answer.push(i);
}

console.log(answer.reduce((acc, cur) => (acc *= cur), 1));
