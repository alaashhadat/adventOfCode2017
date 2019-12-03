const fs = require('fs');

const spreadsheetAsString = fs.
  readFileSync('./input2', 'utf-8', (err, data) => {
    if (!data) {
      console.log(err)
    }
  })
  .trim();
const spreadsheet = spreadsheetAsString
  .split('\n')
  .map(string => string.split('\t')
    .map(number => parseInt(number), 10));
const total = sum =>
  sum.reduce((a, b) => a + b, 0)
const answer = total(spreadsheet.map(arr => Math.max(...arr) - Math.min(...arr)));

console.log(answer)