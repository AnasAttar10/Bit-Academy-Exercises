/// ex1
function calculateHighWord(words) {
  let newWords = words.split(" ");
  let highestScoringWord;
  let maxNumber = 0;
  for (const word of newwords) {
    let number = getWordScore(word);
    if (number > maxNumber) {
      maxNumber = number;
      highestScoringWord = word;
    }
  }
  //   console.log(highestScoringWord);
}

function getWordScore(word) {
  let count = 0;
  const ASCII_CODE = 96;
  for (let index = 0; index < word.length; index++) {
    let num = word.charCodeAt(index) - ASCII_CODE;
    count += num;
  }
  return count;
}

// calculateHighWord("anas isam attar");

//ex2

/// result => 1,3,5,4,6,2
// (function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 1000);
//   console.log(3);
//   setTimeout(function () {
//     console.log(4);
//   }, 0);
//   setTimeout(function () {
//     console.log(6);
//   }, 0);
//   console.log(5);
// })();

//ex3

function determineUniqueCharacters(string) {
  let set = new Set(string);
  let isEqual = set.size === string.length;
  return isEqual;
}

let result3 = determineUniqueCharacters("aaa");
console.log(result3);

// ex4

function determineCharstoLength(oldString) {
  let count = 1;
  let newString = "";
  let string = oldString.split("");
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    const nextElement = string[index + 1];
    if (element === nextElement) count++;
    else if (element != nextElement) {
      newString += element + count;
      count = 1;
    }
  }
  return newString;
}
let string = "aabcccca";
let result4 = determineCharstoLength(string);
// console.log(result4);

// ex5

String.prototype.camelCase = function () {
  let string = this.valueOf();
  let words = string.split(" ");
  let newSentence = "";
  for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (index === 0) {
      newSentence += element;
    } else {
      newSentence += capitlizeWord(element);
    }
  }
  return newSentence;
};

function capitlizeWord(word) {
  return word[0].toUpperCase() + word.substring(1);
}

// console.log("anas isam attar".camelCase());

// ex6

var add = function (x, y) {
  if (y) return x + y;
  else {
    return function (y) {
      return x + y;
    };
  }
};
// console.log(add(2)(3));

/// communication => com
function longestSubstring(string) {
  let j = 0;
  let maxNumber = 0;
  let set = new Set();
  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    if (set.has(current)) {
      if (set.size >= maxNumber) {
        maxNumber = set.size;
      }
      while (string[j] != string[i]) {
        set.delete(string[j]);
        j++;
      }
      set.delete(string[j]);
      j++;
      set.add(string[i]);
    } else {
      set.add(current);
    }
  }
  if (string.length === set.size) maxNumber = set.size;
  return maxNumber;
}
let result7 = longestSubstring("communication");
let newResult = longestSubstring("abcdef");
console.log(newResult);
