// debugger;

// function first(x) {
//   return second(x * 2);
// }

// function second(y) {
//   return third(y * 2);
// }

// function third(z) {
//   return z * 2;
// }

// var result = first(10);

// debugger;

// function pause(milliseconds) {
//   var date = new Date();
//   while (new Date() - date <= milliseconds) {
//     /* Do nothing */
//   }
// }

// function firstFunc() {
//   pause(3000);
//   console.log("I have to go first.");
// }

// function secondFunc() {
//   console.log("Then I can go");
// }

// firstFunc();
// secondFunc();

debugger;

function firstFunc() {
  setTimeout(function () {
    console.log("I have to go first.");
  }, 3000);
}

function secondFunc() {
  console.log("Then I can go");
}

firstFunc();
secondFunc();
