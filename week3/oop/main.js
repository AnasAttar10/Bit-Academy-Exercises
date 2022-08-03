// 
// class Animals{
//     constructor(name){
//         this.name = name 
//         this.children = []
//     }
//     printName(){
//         console.log(`Hi , this is ${this.name}`);
//     }
//     giveBirth (name){
//          this.children.push(name)
//          console.log(this.children);
//     }
// }
// let dog = new Animals("dodo")
// dog.giveBirth("lolo")


// class Vehicle{

//     constructor(x, y, speed) {
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         Vehicle.carsSold++ 
//     }
//     static getInfo() {
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");
//     }
//     static calculateMoney(){
//         return Vehicle.carsSold * 300000
//     }
// }
// Vehicle.carsSold = 0;
// let bmw = new Vehicle(10 , 20 , 30)
// let bmw2 = new Vehicle(10 , 20 , 30)
// // let bmw3 = new Vehicle(10 , 20 , 30)

// // Vehicle.getInfo()

// console.log(Vehicle.calculateMoney());

class Vehicle {
    constructor(x, y, speed ,fuel ) {
        this.x = x;
        this.y = y;
        this._speed = speed;
        this._fuel = fuel 
    }

     set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }
    get fuel() {
        return this._fuel
    }
    set fuel (fuel){
        if( fuel < 0 || fuel > 150)
            return console.log("fuel must be between 0 and 150");
        this._fuel = fuel ; 
    }
}

const c = new Vehicle(null ,null ,2,160)
c.x = 3
c.y = 1
// c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed) // prints undefined
console.log(c.fuel);

// c.speed = 10
// console.log(c.speed)
// c.fuel=160
// console.log(c.fuel);

// class Zoo {
//     constructor() {
//         this.animals = []
//     }

//     addAnimal(animal) {
//         this.animals.push(animal)
//         console.log("Added " + animal.name + " to the zoo")
//     }

//     showAnimals() {
//         this.animals.forEach(a => console.log(a.name))

//     }
// }

// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//     }
// }

// const cat = new Animal("Puss", 4)
// const dog = new Animal("popo", 4)

// const zoo = new Zoo()

// zoo.addAnimal(cat) // prints "Added Puss to the zoo"
// zoo.addAnimal(dog) // prints "Added Puss to the zoo"

// zoo.showAnimals() // prints "Puss"