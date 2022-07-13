

// let person = {
//     username : "anas " , 
//     age : 20 , 
//     SayHello : ()=>console.log(" Hi "  + username ) 
    
// }

// person.SayHello();


// const counter = {
//     count: 0,
  
//     updateCounter: function () {
//       this.count += 1;
//       console.log(this.count);
//     }
//   };
  
//   counter.updateCounter();
//   counter.updateCounter();
//   counter.updateCounter();
  
//   //alert(counter.count);

//   const cat = {
//     makeNoise: function () {
//       alert(this.noise);
//     },
//     noise: "Meow!"
//   };
  
//   const dog = {
//     makeNoise: cat.makeNoise,
//     noise: "Woof!"
//   };
  
//   cat.makeNoise();
//   dog.makeNoise();

// const makeNoiseFunction = function () {
//     alert(this.noise);
//   }
  
//   const cat = {
//     makeNoise: makeNoiseFunction,
//     noise: "Meow!"
//   };
  
//   const dog = {
//     makeNoise: makeNoiseFunction,
//     noise: "Woof!"
//   };
  
//   cat.makeNoise();
//   dog.makeNoise();


// ex1 : 
// const person = {
//     hungry: true,
  
//     feed: function () {
//       if (this.hungry) {
//        hungry = false;
//         alert('Im no longer hungry!')
//       }
//     }
//   }  
  
//   person.feed() //should alert "I'm no longer hungry"

// ex2 
// const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + amount + ' liters in ' + this.name);
//   };
  
//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };
  
//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);

//ex3 

// const pumpFuel = function (plane) {
//     plane.fuel += 1;
//   };
  
//   const airplane = {
//     faul : 0 ,
//     fly: function () {
//         console.log(this.faul);
//       if (this.fuel < 2) {
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     }
//   };
  
//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());

///// %^%%^%% here there is error and I cant Solve It 

// ex4 

// const tipJar = {
//     coinCount: 20,
//     tip: function () {
//       this.coinCount += 1;
//     },
//     stealCoins : function(numb){
//         this.coinCount -= numb
//     }
//   };
  
//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

//ex 5 

// const revealSecret = function () {
//     return this.secret;
//   };
  
//   const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     alert(person.name + " said: "+ result);
//   };
  
//   const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
//   };
  
//   const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
//   };
  
//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);

//ex6 

// const coffeeShop = {
//     beans: 40,
  
//     drinkRequirements: {
//       latte: 10,
//       americano: 5,
//       doubleShot: 15,
//       frenchPress: 12
//     },
  
//     makeDrink: function (drinkType) {
        
//         (this.drinkRequirements.hasOwnProperty(drinkType)) ? "" : "Sorry, we don’t make";
//        console.log( Object.entries(this.drinkRequirements));
//        for (let index = 0; index < this.drinkRequirements.length; index++) {
//         const element = array[index];
        
//        }
//     }
//   }
  
//   coffeeShop.makeDrink("latte"); 
//   coffeeShop.makeDrink("americano");
//   coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
//   coffeeShop.makeDrink("doubleShot");
//   coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"


//// this is not completed 


// const quiz = {
//     code: function() {console.log(this.answers.c + ' is not the answer')},
//     answers: {
//         a: `answers`,
//         b: 'this is not the answer',
//         c: `this`,
//         d: `21`,
//         e: `both a and c`,
//         f: 'both a and d'
//     }
// }

// quiz.code()


// this is ex 


// const myObject = {
//     // your code here
//     num1 : 2 ,
//     numb2 : 3 , 
//     numb3 : 4 
//     }
    
//     for (let x of Object.entries(myObject)) {
//         let element = x[1] ; 
//         if(element%2 ==0) 
//         console.log(element);
//     }