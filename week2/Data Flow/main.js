let posts = []

let btn =$("#btn")

let render =function(){

    for (const post of posts) {
        let newDiv = `<div class = "post">${post.username}:${post.text}</div>`
        $("#posts").append(newDiv)
    }
}

btn.on("click",function(){
    $('#posts').empty()
    let username=$("#username").val()
    let text =$("#text").val()
    posts.push({"username":username , "text":text})
    render()
    $("#username").val("")
    $("#text").val("")
})

$("#posts").on("click" ,".post" ,function(){
    let postText = $(this).text()
    let index = postText.indexOf(":")
    let username = postText.substring(0,index)
    let text = postText.substring(index + 1,postText.length)
    console.log(username , text);
    let targetIndex ; 
    for (const index in posts) {
        if(posts[index].username === username)
            targetIndex = index
    }
    posts.splice(targetIndex , 1 )
    $('#posts').empty()

    render()
})

