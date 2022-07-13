// ex1 

// function isEvenOrOdd(num){
//     if(num%2 == 0)
//         return "even"
//     return "odd"
// }
// let x = isEvenOrOdd(8);
// console.log(x)

// ex2 

// function PrintOddNumber(numbers){
//     for (let index = 0; index < numbers.length; index++) {
//         const number = numbers[index];
//         if(isEvenOrOdd(number)==="odd")
//             console.log(number);
        
//     }
// }
// let numbers = [1,2,3,4,5,6];
// PrintOddNumber(numbers)

// ex 3 

// function checkExists(numbers , value ){
//     for (let index = 0; index < numbers.length; index++) {
//         const number = numbers[index];
//         if(number === value)
//             {
//                 return true ;
//             }
//     }
//     return false ;
// }
// let re = checkExists([1,2,3] , 7) ;
// console.log( re);

// ex 4 

// let calculator ={
//     add :function(num1 , num2 ){
//         return num1 + num2 ;
//     },
//     subtract :function(num1 , num2 ){
//         return num1 - num2 ;
//     }
// }
// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) //should print 42

// ex 5 

// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// function makeRegal(name){
//     return "His Royal Highness, "+ name
// }
// function increaseByNameLength(money ,name){
//     let nameLength = name.length ; 
//     let hasMoney = nameLength * money;
//     return hasMoney ;
// }
// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


