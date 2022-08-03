// alg1

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];

  let letters = str.split("");

  let count = 0;

  for (const letter of letters) {
    if (vowels.includes(letter)) count++;
  }

  return count;
}

let result1 = countVowels("abcdeau");

// console.log(result1);

// alg2

function FindMedian(str) {
  let letters = str.split("");

  letters.sort();

  let middelindex = 0;

  let lengthNumbers = letters.length;

  if (lengthNumbers % 2 == 0) middelindex = lengthNumbers / 2 - 1;
  else {
    middelindex = Math.floor(lengthNumbers / 2);
  }

  return letters[middelindex];
}

let result2 = FindMedian("questin");

// alg3
function FindSecondBiggest(numbers) {
  let bigOne = numbers[0];

  let bigTwo = 0; // negativeNumber

  for (const number of numbers) {
    if (number > bigOne) {
      bigTwo = bigOne;

      bigOne = number;
    } else if (number > bigTwo) {
      bigTwo = number;
    }
  }

  return bigTwo;
}

let result3 = FindSecondBiggest([-12, -3, 1, -7, -23]);

console.log(result3);

function commonElement(numbers1, numbers2) {
  /// here should use  set and has methods

  let commonElements = [];

  for (const num of numbers1) {
    if (numbers2.includes(num)) commonElements.push(num);
  }

  return commonElements;
}

let result4 = commonElement([1, 2, 3], [3, 4, 5, 2]);

// console.log(result4);

function commonElementBetweenThreeArrays(numbers1, numbers2, numbers3) {
  let commonElement1 = commonElement(numbers1, numbers2);

  let result = commonElement(commonElement1, numbers3);

  return result;
}

let result5 = commonElementBetweenThreeArrays([1, 2, 3], [4, 5, 2], [7, 2, 9]);

// console.log(result5);

function followedNumbers(numbers) {
  let set = new Set(numbers);

  let newArray = [];

  for (const num of numbers) {
    if (set.has(num + 1)) newArray.push(num, num + 1);
  }

  let newSet = new Set(newArray);

  return newSet;
}

let result6 = followedNumbers([4, 1, 3, 5]);

// console.log(result6);

function DuplicateArray(numbers) {
  let newArray = [...numbers, ...numbers];

  return newArray;
}

const duplicateDrray = (numbers) => [...numbers, ...numbers];

let reuslt7 = DuplicateArray([1, 2, 3]);

// console.log(result7);

function ReverseOnlyNumbers(values) {
  let numbers = [];

  for (const value of values) {
    if (typeof value === "number") {
      numbers.push(value);
    }
  }

  let reversNumbers = numbers.reverse();

  let count = 0;

  let newArray = [];

  for (let index = 0; index < values.length; index++) {
    const element = values[index];

    if (!(typeof element == "number")) {
      newArray[index] = element;
    } else {
      newArray[index] = reversNumbers[count];

      count++;
    }
  }

  return newArray;
}

let result8 = ReverseOnlyNumbers([1, 2, 3, "a", "b", 4]);
// console.log(result8);

const deepClone = function (obj) {
  return { ...obj };
};

let x = { a: "b", a2: ["first", "second"] };
let y = { b: x, b3: ["firtsY", x] };
let z = deepClone(y);
y.b = ["anas"];

// console.log(z);
