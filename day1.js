const fs = require("fs");

const input = fs
  .readFileSync("./input", "utf-8")
  .trim()
  .split("")
  .map(digits => parseInt(digits));
//part 2
const length = input.length;
input.push(input[0]);
let total = 0;
for (let i = 0; i < length; i++) {
  if (input[i] === input[i + 1]) {
    total += input[i];
  }
}

console.log(total);