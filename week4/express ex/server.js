const express = require("express");

let app = express();
//ex1
// app.get("/", (req, res) => {
//   res.send("My name is Anas ");
// });

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

app.get("/priceCheck/:name", (req, res) => {
  let resResult = req.params.name;
  let thePrice = 0;
  for (const iterator of store) {
    if (iterator.name === resResult) {
      res.send({ price: iterator.price });
      return;
    }
  }
  res.send({ price: null });
});
let path = require("path");
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.get("/priceCheck/:name", (req, res) => {
  let resResult = req.params.name;
  let thePrice = 0;
  for (const iterator of store) {
    if (iterator.name === resResult) {
      res.send({ price: iterator.price });
      return;
    }
  }
  res.send({ price: null });
});

app.get("/buy/:name", (req, res) => {
  let name = req.params.name;
  for (const iterator of store) {
    if (iterator.name === name) {
      iterator.inventory--;
      res.send(iterator);
      return;
    }
  }
  res.send({ inventory: null });
});
//ex6
app.get("/sale", (req, res) => {
  let count = 0;
  let result = req.query.admin;
  console.log(result);
  if (result === "true") {
    for (const iterator of store) {
      if (iterator.inventory > 10) {
        store[count].price = iterator.price / 2;
      }
      count++;
    }
    console.log(store);
  }
  res.send("hi");
});

const port = 3000;

app.listen(port, () => {
  console.log("server is running  ... ");
});
