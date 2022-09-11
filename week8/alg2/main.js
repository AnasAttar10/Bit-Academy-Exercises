//ex1
// printStarSeries(5, 3);

// function printStarSeries(numOne, numTwo) {
//   let string = "";
//   for (let index = 0; index < numOne * 2; index++) {
//     if (index <= numOne) string += "*";
//     if (index > numOne) {
//       let differance = index - numOne;
//       string.substring(differance + 1);
//       //   console.log(differance);
//     }
//     console.log(string);
//   }
// }
// if (prices[index] > maxNumber) {
//   maxNumber = prices[index];
//   indexOfMaxNumber = index;
// }
// if (prices[index] < minNumber && indexOfMaxNumber > index) {
//   minNumber = prices[index];
//   indexOfMinNumber = index;
// }

function getMaxProfit(prices) {
  if (prices.length === 0 || prices.length === 1) return undefined;
  let minNum = prices[0];
  let maxProfit = Number.MAX_VALUE * -1;
  let profit;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minNum) {
      profit = prices[i] - minNum;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
      minNum = prices[i];
      continue;
    }
    profit = prices[i] - minNum;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
}

let result = getMaxProfit([100, 90, 80, 60, 50]);
let result1 = getMaxProfit([60, 100, 10, 20]);

console.log("the result ");
// console.log(result1);
/*
function findPairs(arr, sum) {
  let spicalCase;
  let mySet = new Set(arr);
  if (sum % 2 === 0) spicalCase = sum / 2;
  let pairs = [];
  let count = 0;
  for (let num of arr) {
    if (num === spicalCase) count++;
    else if (mySet.has(sum - num)) {
      pairs.push([num, sum - num]);
      mySet.delete(num);
      mySet.delete(sum - num);
    }
  }
  if (count > 1) pairs.push([spicalCase, spicalCase]);
  return pairs;
}
*/

function findPairs(arr, sum) {
  let pairs = {};
  let prev = new Set();
  for (let i of arr) {
    if (prev.has(sum - i)) {
      if (!pairs[sum - i] && !pairs[i]) {
        pairs[i] = sum - i;
      }
    }
    prev.add(i);
  }
  return pairs;
}
// let resultTest = findPairs([2, 2], 4);
// console.log(resultTest);

let resultTest = findPairs([2, 0, 10, 9, 2, -3, 2, 1, 3, 7, -3, -5, 4, 0], 4);
console.log(resultTest);

let resultTest2 = findPairs([2, 1, 3], 4);
// console.log(resultTest2);

function findPairsByObject(arr, sum) {
  let obj = {};
  let obj2 = {};
  let pairs = [];
  for (const num of arr) {
    obj2[num] = 0;
  }
  for (const num of arr) {
    let value = sum - num;
    if (obj[value] === undefined && !(num in obj) && value in obj2) {
      obj[num] = value;
      pairs.push([num, value]);
    }
  }
  return pairs;
}
let resultobj = findPairsByObject([2, 0, 10, 9, 1, 3, 7, -3, -5, 4, 0], 4);
let resultobj2 = findPairsByObject(
  [2, 0, 10, 9, 1, 3, 7, -3, , 1, -5, 4, 0],
  5
);
// console.log(resultobj2);

// 2  = v = 2 / o[2]=u | [2 in o ]f --- > 2,2
// 1 = v = 3 / o[3]=u | [1 in o ]f ---- > 1,3
// 3 = v = 1 / o[1]=3 | [3 in o]f

/// [0,4] ,[9,-5],[1,3],[7,-3]

function getJumble(arrOne, arrTwo) {
  let mySet = new Set(arrOne);
  for (const item of arrTwo) {
    mySet.add(item);
  }
  return mySet;
}

const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];

// const jumble = function (arr1, arr2) {
//   let jumbledArr = //work with arr1 and arr2
//   return jumbledArr
// }

// let resultJumble = getJumble(colors, foods);
// console.log(resultJumble);
//  could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]

function getTheFirstNonRepeatingCharacter(string) {
  let lettersObject = {};
  for (const letter of string) {
    // console.log(letter);
    if (letter in lettersObject) {
      lettersObject[letter] = lettersObject[letter] + 1;
    } else {
      lettersObject[letter] = 1;
    }
  }

  for (const key in lettersObject) {
    if (lettersObject[key] === 1) return key;
  }
}

let string = "aabbccdee";
let string2 = "abca";
// let result3 = getTheFirstNonRepeatingCharacter(string2);
// console.log(result3);

function missingNumbers(numbers, n) {
  let mynumbers = {};
  let missingsNumbers = [];
  for (let num of numbers) {
    mynumbers[num] = true;
  }
  for (let i = 1; i <= n; i++) {
    if (!(i in mynumbers)) {
      missingsNumbers.push(i);
    }
  }
  return missingsNumbers;
}
let resultmissing = missingNumbers([4, 3, 1, , 7, 6], 7);
// console.log(resultmissing);
