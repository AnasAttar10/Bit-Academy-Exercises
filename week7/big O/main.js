// ex1 ===> o(n)

// ex2 ===> log(n)

// ex3===> o(1) because it wil end at first time

// ex4 ===> o(nm)

// ex5 ===> o(n)

//ex6

function findDuplicates(arr) {
  let set = new Set(arr);
  let numbersObject = {};
  let numberDuplicates = [];
  for (const item of arr) {
    if (set.has(item)) {
      if (numbersObject[item]) {
        numberDuplicates.push(item);
      } else numbersObject[item] = 1;
    }
  }
  return numberDuplicates;
}

let result = findDuplicates([1, 2, 3, 1, 2, 4, 3, 5]);

console.log(result);

/// ex7

let employees = {
  123: {
    name: "ahmad",
    age: 22,
    salary: 1200,
  },
  345: {
    name: "anas",
    age: 33,
    salary: 1400,
  },
  678: {
    name: "amjad",
    age: 12,
    salary: 800,
  },
};
function findEmployeeSalary(employeeId) {
  return employees[employeeId].salary;
}
let result2 = findEmployeeSalary(345);

console.log(result2);

// ex 8

function binarySearch(arr, l, r, x) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] == x) return mid;
    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);
    return binarySearch(arr, mid + 1, r, x);
  }
  return -1;
}
