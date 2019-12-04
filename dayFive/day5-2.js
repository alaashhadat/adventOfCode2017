const fs = require("fs");

const maze = fs
  .readFileSync("./input", 'utf-8', (err, data) => {
    if (!data) {
      console.log(err)
    }
  })
  .trim()
  .split("\n")
  .map(jumps => parseInt(jumps), 10)
const mazeLength = maze.length;
let moves = 0;
let i = 0;
while (i >= 0 && i < mazeLength) {
  const jump = maze[i];
  if (jump >= 3) {
    maze[i]--;
  } else {
    maze[i]++;
  }

  i += jump;
  moves++;
}

console.log(moves);