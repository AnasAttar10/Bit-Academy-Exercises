// console.log("my name is anas attar");

// const createPerson = function(name, age){
//     const person = {
//         personName: name, 
//         personAge: age
//     }

//     return person
// }

// const person = createPerson("Elon", 42)
// console.log(person)

// const foo = function () {
//     const x = 1
  
//     const bar = function () {
//       console.log(x) //notice this inner function using the outer function's variable
//     }
  
//     return bar
//   }
  
//   const baz = foo() //out here, x doesn't exist
//   baz() //but when we invoke baz, we're printing x!

// const setCounter = function (num) {
//     let counter = 0
  
//     const count = function () {
//       counter += num;
//       console.log(counter)
//     }
  
//     return count
//   }
  
//   const increment = setCounter(2)
//   increment()
//   increment()
//   increment()

// spot chech 1 

// const family = function (){
//     let members = []  
//     const birth = function(newMember){
//         members.push(newMember)
//         console.log(members);
//     }
//     return birth ; 
// } 

// let Givebrith = family() ; 

// Givebrith("anas")
// Givebrith("osed")


////////////////////////// modules ///////////////// 

// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }
//     const anas = "anas"
//     return {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide,
//         name:anas
//     }
// }
// const m = mathOperations()

// console.log(m)

/// spot chech 2 

// console.log(m.add(13,29));
// console.log(m.mult(1.75,24));
// console.log(m.mult(7, m.div(36,6)))

// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.listUsers()
// console.log("==================")
// usersModule.addUser('anas')
// usersModule.listUsers()
// console.log(usersModule.users)

//  ex1 
// const StringFormatter = function (){
//     const capitalizeFirst = function (str){
//         return str[0].toUpperCase()+str.substring(1).toLowerCase()
//     }
//     const skewerCase = function(str){
//         return str.replace(" " , "-")
//     }
//     return {
//         capitalizeFirst: capitalizeFirst , 
//         skewerCase : skewerCase
//     }
// }

// const formatter = StringFormatter()

// console.log (formatter.capitalizeFirst("dorothy")) //should print Dorothy
// console.log(formatter.skewerCase("blue box"))//should print blue-box

// ex2 

// const Bank  = function (){
//     let money = 500 ;
//     const depositCash  =function(cashNumber){
//         return money+=cashNumber 
//     }
//     const checkBalance  =function (){
//         return money ; 
//     }
//     return{
//         deposit :depositCash , 
//         showBalance :checkBalance
//     }
// }

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// console.log(bank.showBalance()) //should print 950

// ex 3 

// const SongsManager =function(){
//     let songs =[]
//     const addSong =function (songName , Url ){
//         indexOfEqual = Url.indexOf("=")
//         StringQuery = Url.substring(indexOfEqual+1 , Url.length)
//         let newSong = {"songName" : songName , "Url" : StringQuery}
//         songs.push(newSong)
//         return songs
//     }
//     const getSong =function (songName){
//         for (const song of songs) {
//             if(song.songName === songName)
//             queryString = song.Url
//             Url = "https://www.youtube.com/watch?v="+queryString 
//             return Url
//         }
//     }
//     return {
//         addSong :addSong ,
//         getSong :getSong
//     }
// }

// const songsManager = SongsManager()
// songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
// songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
// songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

// console.log(songsManager.getSong("sax"));
//  // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

// let  person = {
//     age : 20, 
//     per : setInterval(function(){
//         console.log(this)
//     } , 3000)
// }
// person.print()
