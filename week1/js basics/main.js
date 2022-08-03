

// part 1 

// ex1 
// (5 > 2) && false  => false 
// !("knife" === "sword") => true 
// (1 < 2) || (-1 > -1) || !false => true
// "" =? false
// (31 % 5) == "1" => true 
// !!true => true
// "5th Avenue" != "5th Avenue" =>false
// 52 !== "52" => true
// (undefined || null) => false
 
// ex2 
// let a = 3
// let c = 0
// let b = a
// b = a
// c = a
// b = c
// a = b

// result => a=3 ,b=3 ,c= 3


/// part 2 

// ex1 js basic

// let boughtTesla = true
// const yearOfTeslaPurchase = 2017
// let isUSCitizen = true
// let currentYear = 2018

// if(boughtTesla ){
//     if(isUSCitizen){
//         if(currentYear - yearOfTeslaPurchase >= 4){
//             console.log(" would you like an upgrade") 
//         }
//         else{
//             console.log(" is satisfied with the car")
//         }
//     }
//     else {
//         console.log("would you like to move to the US")
//     }
// }
// else{
//     console.log("are you  interested in buying one");
// }



// ex 2 js basic  about arrays 

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// numbers.splice(1,1)
// numbers.splice(1,1)
// console.log(numbers)
// numbers[3]=1
// console.log(numbers)
// numbers.splice((numbers.length) - 4 , 4) 
// console.log(numbers)
// numbers.unshift(0)
// console.log(numbers)


// ex3 js basic about objects 

// let p1= {
//     name:"anas",
//     age:20,
//     city:"qalqilia"
// }
// let p2= {
//     name:"osed",
//     age:22,
//     city:"nablus"
// }
// if(p1.age == p2.age){
    // if (p1.city == p2.city){
    //     console.log("“Jill wanted to date Robert”");
    // }
  // }  
// else{
//     console.log("“Jill wanted to date Robert, but couldn’t”");
// }

// ex4 js basic
// let library ={
//     books: 
//     [
//         { bookname : " A " , auther : "anas "} , 
//         {bookname :" B " , auther : " osed "} , 
//         {bookname :" C " , auther :"ameer "}  ,
//     ]
// }

//ex5 js basic

// const oldReservation ={
//     Bob :{claimed :false} , 
//     Ted :{claimed :true }
// }
// const oldname = prompt("Please Enter the name for your reservation")
// const username = oldname.toLowerCase();
// const reservation = {}
// for (const [key, value] of Object.entries(oldReservation)) {
//   reservation[key.toLowerCase()]= value
// }

// if(reservation[username] !== undefined){
//     if(!reservation[username].claimed){
//         alert("Welcome " + username)
//     }else{
//         alert("someone already claimed this reservaton")
//     }
// }else{
//     alert("You have no rservation ")
//     reservation[username]={claimed :true}
// }
// console.log(reservation);

/// there are extra ec should solve it 

// ex6 js basics about the arrays  

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// for (const index in names) {
//         const name = names[index];
//         const age = ages[index];
//         people.push({"name" : name , "age" :age})  
// }
//    console.log(people);
// for (const person of people) {
//     console.log(person.name + " is "+person.age + " years old")
// }


// ex 7 js basics 
// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]
//   let indexOfNeagativeTexts=[] ;
//   for (let index = 0; index < posts.length; index++) {
//     const post = posts[index];
//     if(post.text.includes("DON'T BUY" , "worst")){
//         posts.splice(index,1);
//     }   
//   }
//   console.log(posts);

// ex 8 js basiccs 

// const posts = [
//     {
//       id: 1, 
//       text: "Love this product",
//       comments: []
//     },
//     { 
//       id: 2, 
//       text: "This is the worst. DON'T BUY!", 
//       comments: [
//                   {id: 1, text: "Idiot has no idea"}, 
//                   {id: 2, text:"Fool!"}, 
//                   {id: 3, text: "I agree!"}
//                 ]
//      },
//      {
//       id: 3, 
//       text: "So glad I found this. Bought four already!",
//       comments: []
//      }
//   ]
//   for (let index = 0; index < posts.length; index++) {
//     const element = posts[index];
//     if(element.comments.length != 0)
//     {
//         let comments = element.comments ; 
//         comments.splice(2,1);
//     }
    
//   }
//   console.log(posts);

//   delete posts[1].comments[2];

// ex9 js basics 

// const dictionary = {
//     "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
//     "B": ["Banana", "Bonkers", "Brain", "Bump"],
//     "C": ["Callous", "Chain", "Coil", "Czech"]
//   }

//  for (const item of Object.keys(dictionary)) {
//     const words = dictionary[item];
//     console.log("Words that negin with " + item )
//     for (const word of words) {
//         console.log(word);
//     }
//  }



// let x = [ 
//     {name: "ant",  color: "brown"}, 
//     {name: "flower", color: "green"}
// ]
// x.push({name: "ant", color: "green"});

// console.log(x[2].name)

// let x = [ {human: {name: 'Daena', age: 31} } ][0].age
// console.log(x);

  
