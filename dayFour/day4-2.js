const fs = require("fs");

const text = fs
  .readFileSync("./input", "utf-8")
  .trim()
  .split("\n");

const alphabetize = word =>
  word
    .split("")
    .sort()
    .join("");

const isNotAnagram = arrangedWords => {
  const anagram = {};
  const words = arrangedWords.split(" ");
  for (let word of words) {
    word = alphabetize(word);
    if (anagram[word]) {
      return false;
    }
    anagram[word] = true;
  }
  return true;
};

console.log(text.filter(isNotAnagram).length);