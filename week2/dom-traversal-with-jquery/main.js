
// $(".remove").on("click", function(){
//     alert($(this).closest(".post").data().id)
//   })
//   console.log("anas");


//   $(".submit-data").on("click" ,function(){
//     console.log($(this).siblings("span").find("input").val())
//   })

// //   $("button").on("click", function(){
// //     let theValue = $(this).closest("div").find("span").text()
// //     alert(theValue)
// //   })

//   $("button").on("click" ,function(){
//     let value = $(this).siblings("div").find("p").text()
//     console.log(value);
//   })


  /// ex 

//   let IdArray = []
//   $(".generator").on("click",function(){
//     let processor = $(this).closest(".processor").attr("id")
//     console.log("processor " , processor);
//     let Id = $(this).closest(".computer").attr("data-id")
//     console.log("Id " , Id);
//     IdArray.push({"cmp_id" :Id})
//     BusNumber= $(this).closest(".computer").find(".BUS").text()
//     console.log("bus" ,BusNumber);

//   })

//   let printQRs =function(QRs){
//     for (const QR of QRs) {
//         console.log(QR);
//     }
//   }


//   $(".validator").on("click" , function(){

//     let generatorText =$(this).text()
//     let MB = $(this).closest(".computer").find(".MB").text()
//     let QR1 =$(this).closest(".ram").siblings(".processor").find(".QR").eq(0).text()
//     let QR2 =$(this).closest(".ram").siblings(".processor").find(".QR").eq(1).text()

//     console.log("Gtext" ,generatorText);
//     console.log("mp" ,MB);
//     console.log(QR1);
//     console.log(QR2);
//     // printQRs(QRs)
//     console.log("Done");

//   })



/////// external 

// $( ".btn" ) .on ( "click" , function () { alert ( $ ( this ) .closest ( ".container" ) .find ( ".username" ) .val () )})

// let x = "flap"
// let y = {a: "shlop", x: "dub"}
// const all = [x, y]

// x = all[1].x
// $("#corq").siblings(".nalo").append("<div>" + x + " - Ryk</div>")