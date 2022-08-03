

// ex1 

// const fetch = function (isbn) {
//     $.ajax({
//         method: "GET",
//         url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+isbn,
//         success: function (data) {

//             printUserData(data)

//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// function printUserData (data){

//     console.log(data);
// }

// let isbn ="0439023521" 
// fetch(isbn)

// ex2 

// const fetch = function (queryType , queryValue) {
//     $.ajax({
//         method: "GET",
//         url: 'https://www.googleapis.com/books/v1/volumes?q='+queryType+':'+queryValue,
//         success: function (data) {

//             printUserData(data)

//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// function printUserData (data){

//     console.log(data);
// }

// // let isbn = "9780307417138 "
// // fetch("isbn" , isbn)
// fetch("title" , "The Wise Man's Fears")


// ex 3 


// const fetch = function (isbn) {
//     $.ajax({
//         method: "GET",
//         url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+isbn,
//         success: function (data) {

//             printUserData(data)

//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// function printUserData (data){

//     console.log(data);
// }

//ex 4 
// let apiKey="PU2j4y10zQLCrVjeePWJMEkaUbSxyjAq" // for search

// let limit = 5



//  //apikey =  JiuCNUKOPsNZricUWQedsItDpwUlZWAO //trending
// // ryan+gosling
//  let url = `http://api.giphy.com/v1/gifs/search?q=cat&api_key=${apiKey}&limit=${limit}`

//  //let url1 = "https://api.giphy.com/v1/gifs/search?api_key=JiuCNUKOPsNZricUWQedsItDpwUlZWAO&limit=25&rating=g"

//  const fetch = function(url){

//     $.ajax({
//         method:"GET",
//         url:url,
//         success: function(data){

//             printResults(data)
//         },
//         error:function(texterror){

//             console.log(texterror);
//         }
//     })
//  }

//  function printResults(data){

//     let src = data.data[0].embed_url;

//     $("body").append(`<iframe  src=${src}></iframe `)
//  }
//  fetch(url)

// ex5 

//  let url = "https://api.giphy.com/v1/gifs/search=?api_key=JiuCNUKOPsNZricUWQedsItDpwUlZWAO&limit=25&rating=g"

//  const fetch = function(url){

//     $.ajax({
//         method:"GET",
//         url:url,
//         success: function(data){

//             printResults(data)
//         },
//         error:function(texterror){

//             console.log(texterror);
//         }
//     })
//  }

//  function printResults(data){
//     let src = data.data[1].embed_url;

//     for (const item of data.data) {
//         item
//     }

//     $("body").append(`<iframe src=${src}></iframe `)
//  }

//  let search = $("#search").val()
//  let btn = $("#btn")

//  btn.on("click", function(){

//  })
//  fetch(url)


// let data = $.get("https://api.giphy.com/v1/gifs/trending?api_key=JiuCNUKOPsNZricUWQedsItDpwUlZWAO&limit=25&rating=g", function(result){
//     return result
// })
// console.log(data)