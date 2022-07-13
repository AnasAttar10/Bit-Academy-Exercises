// ex1
$("#button").on("click" , function(){
    let myinput =$("#myinput").val()
     $("#ul").append(`<li>${myinput}</li>`)
     $("#myinput").val(" ")
})

// ex2 
$("#ul").on("click" , "li" , function(){
    $(this).remove()
})

// ex3 

$("body").append(`<div class='box'></div>`)
$("body").append(`<div class='box'></div>`)

$(".box").hover(function(){
    // let mainColor = $(this).css("background-color")
    // console.log(mainColor);
    $(this).css("background-color" ,"orange")
},
function(){
    $(this).css("background-color" ,"#8e44ad")

}


 )

//ex4 

$(".item").on("click",function(){
    $(this).attr("data-instock") === "true" ? $("#cart").append(`<li>${$(this).text()}</li>`) :""
    
})

let basket = $("#basket")
const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]


  for (const fruit of fruits) {
    basket.append(`<div class = ${fruit.color}>${fruit.name}</div>`)
  }


  //// there is extention equastion

//   $('#btn').on("click" , ()=>$(this).css("color","red"))

let posts = [{name: 'Shoobert'}, {name: 'Kayne'}]

for(let post of posts){
    $("#posts").append(`
        <div>${post.name}</div><input type="text" placeholder="say something nice" />
    `)
}

posts.splice(0, 1)