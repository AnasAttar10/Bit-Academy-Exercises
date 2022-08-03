console.log("anas");

let sourse = $("#template").html();

let template = Handlebars.compile(sourse);

let arr = {
  teams: ["anas", "osed", "khaled ", "Ahmad"],
};

let newHtml = template(arr);

$("#people").append(newHtml);
