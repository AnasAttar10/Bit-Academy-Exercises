const validator = require("validator");

let email1 = "shoobert@dylan";

//let result = validator.isEmail(email1); //=> true

// console.log("the result is " + result);

let mobilePhone = "786-329-9958";

let result2 = validator.isMobilePhone(mobilePhone, "en-US");

// console.log(result2);

let blacklist = ["!", "?", ".", "@", "~", ",", "'"];

let text = "I'M SO EXCITED!!!~!";

let result3 = validator.blacklist(text, blacklist);

console.log(result3.toLowerCase());
