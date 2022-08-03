const express = require("express");
const { data } = require("jquery");

const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

const data1 = ["anooos", " awooos "];
app.get("/book/:bookId", (req, res) => {
  let id = req.params.bookId;
  bookdata = data1[id];
  res.send(bookdata);
});
// app.get("/", function (request, response) {
//   console.log("Someone has come into the server. Brace yourselves.");
//   response.send("Ending the cycle, thanks for visiting osed attar");
// });

// app.get("/users", function (request, response) {
//   console.log("Someone has come into the server. Brace yourselves.");
//   response.send("Ending the cycle, thanks for visiting");
// });

// app.get("/maps", function (request, response) {
//   response.send("Here's some stuff related to maps");
// });

// app.get("/shoobi", function (request, response) {
//   response.send("This here is the shoobi *route*");
// });

// app.get("/life", function (req, res) {
//   res.send("42");
// });

// app.get("/landing/:username&&:password", function (request, response) {
//   response.send(
//     `Hi there, ${request.params.username} and the password is ${request.params.password}`
//   );
// });

// const users = {
//   tilda: "You've done a wonderful job",
//   riva: "You need to improve your form, but good perseverance",
//   jeremy: "You're incredible",
// };

// app.get("/users/:username", function (req, res) {
//   let username = req.params.username;
//   res.send(`Hi ${username} your message is ${users[username]}`);
// });

// app.get("/routeWithOptionalParameters", (request, response) => {
//   let params = request.query;
//   response.send(params);
// });

// app.get("/details", (request, response) => {
//   let params = request.query;
//   response.send(params);
//   let city = params.city;
//   console.log(city);
// });

const port = 3000;

app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
