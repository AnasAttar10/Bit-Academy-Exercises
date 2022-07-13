
// let users = []

// const getData = function () {
//     users = [{ name: "Rick" }, { name: "Morty" }]
//     console.log("Got users")
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000)
// }

// getData()

// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()

// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()


// const timer = function(){
//     console.log(new Date())
//   }
  
//   setInterval(timer, 1000)

// spot check 4 

// let square2 = number => number * number
// console.log(square2(4))

// spot check 5 

// let getFormalTitle = (title ,username) => title + "  "+username ;

// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(function () { //normal function
//             ﻿console.log("The name is: " + this.name)
//             console.log(this)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()

// ex1 callbacks

// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }
//   function pushPull(func){
//     func()
//   }
//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"

// ex2 callbacks

// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
//   function getTime(mycallback){
//     let Time = new Date()
//         mycallback(Time)
//   }


//   getTime(returnTime)

// ex 3 

// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
//   function logData(data){
//     console.log(data)
//   }
//   displayData(alert, logData, "I like to party")

/// ex4 arrow 

// let sum = (num1 ,num2 ,num3 )=> num1 +num2 + num3 

// console.log(sum(3,4,9));

//ex 5
// let capitalize =(str)=> str[0].toUpperCase() + str.substring(1).toLowerCase()
// console.log( capitalize("bOb")) // returns Bob
// console.log( capitalize("TAYLOR")) // returns Taylor
// console.log( capitalize("feliSHIA")) // returns Felishia

// ex 6


// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot"
//     }
//     return "cold"
//   }

// let commentOnWeather =(num)=> console.log("it's " + determineWeather(num)) 

// commentOnWeather(30) //returns "It's hot"
// commentOnWeather(22) //returns "It's cold"

// ex7  

// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
//   }
      
//   const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
//   const makeSound = sound => alert(sound)
      
//   explode(shineLight, makeSound, "BOOM")

// let x = {
//     count: 12,
//     go: () => {
//         setTimeout(function () {
//             console.log(this.count)
//         }, 1500)
//     }
// }
// x.go()

// const run = (name) => {console.log("Run, " + name + ", run!")}
// const yell = function(action){
//     let env = "Forest"
//     action(env)
// }
// run(yell)

// const posts = [
//     {
//         id: 1,
//         text: "Love this product",
//         comments: []
//     },
//     {
//         id: 2,
//         text: "This is the worst. DON'T BUY!",
//         comments: [
//             { id: 1, text: "Idiot has no idea" },
//             { id: 2, text: "Fool!" },
//             { id: 3, text: "I agree!" }
//         ]
//     },
//     {
//         id: 3,
//         text: "So glad I found this. Bought four already!",
//         comments: []
//     }
// ]

// const removeComment = function (postId, commentId) {
//     for (post in posts) {   // here for in loop on index 
//         if (post.id === postId) {
//             removeCommentFromPost(post, commentId);
//         }
//     }
// }

// const removeCommentFromPost = function(post, commentId){
//     for (let i =0; i < comments.length; i++) {
//         if (post.comments[i].id === commentId) {
//             post.comments.remove(comment); // I can't use remove method with array 
//         }
//     }
// }

// removeComment(2, 3)
// console.log()







