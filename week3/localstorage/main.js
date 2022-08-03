let text = $("#text")

let btn =$("#btn")

let clearAll =$("#clearAll")

let removeItem =$(".removeItem")

let wisdomsDiv = $("#wisdoms")

let wisdoms = JSON.parse (localStorage.getItem("wisdoms") )|| []

displaywisdoms() 

btn.on("click",function(){
    let val = text.val()
    console.log(val);
    wisdoms.push({text:val})
    localStorage.setItem("wisdoms", JSON.stringify(wisdoms))
})

clearAll.on("click",function(){
    localStorage.clear()
})

removeItem.on("click",function(){
    let targetId = $(this).attr("id")
    
    localStorage.setItem("wisdoms",JSON.stringify(wisdoms))
})

function displaywisdoms(){

    let count =0 ;

    for (const wisdom of wisdoms) {

        wisdomsDiv.append(
            `<div>
            <span id="${count++}" class ="removeItem">X</span>
            <p id="${count++}"> ${wisdom.text} </p>
            </div>`
        )       
    }

}