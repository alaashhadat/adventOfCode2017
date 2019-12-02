const fs = require("fs");

const input = fs
  .readFileSync("./input1", "utf-8", (err, data) => {
    if (!data) {
      console.log(err)
    }
  })
  .trim()
  .split("")
  .map(inputDigits => parseInt(inputDigits));
//part 2
const inputLength = input.length;
input.push(input[0]);
let total = 0;
for (let i = 0; i < inputLength; i++) {
  if (input[i] === input[i + 1]) {
    total += input[i];
  }
}

console.log(total);