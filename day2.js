const fs = require('fs');
const spreadsheetString = fs.readFileSync('./input2', 'utf-8').trim();
const spreadsheet = spreadsheetString.split('\n').map(string => string.split('\t').map(number => parseInt(number)));
const total = s => s.reduce((a, b) => a + b, 0)
const answer = total(spreadsheet.map(arr => Math.max(...arr) - Math.min(...arr)));
console.log(answer)