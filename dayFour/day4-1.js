const fs = require("fs");

const text = fs
  .readFileSync("./input", "utf-8", (err, data) => {
    if (!data) {
      console.log(err)
    }
  })
  .trim()
  .split("\n")

const isNotDuplicated = text => {
  const duplicated = {};
  const words = text.split(" ")
  for (let word of words) {
    if (duplicated[word]) {
      return false;
    }
    duplicated[word] = true;
  }
  return true;
}

const answer = text.filter(isNotDuplicated).length
console.log(answer);
