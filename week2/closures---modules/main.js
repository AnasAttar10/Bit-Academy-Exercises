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
