const express = require("express");
const router = express.Router();
console.log("Api ");
const Person = require("../../models/Person");

router.get("/people", function (req, res) {
  Person.find({}, function (err, people) {
    res.send(people);
  });
});

// ex1
router.post("/person", (req, res) => {
  let person = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  };
  let p1 = new Person(person);
  console.log("HI ");
  p1.save();
  res.end();
});
router.put("/person/:id", (req, res) => {
  let id = req.params.id;
  Person.findByIdAndUpdate(
    id,
    { age: 80 },
    { new: true },
    function (err, person) {
      console.log(person);
    }
  );
  res.end();
});
router.delete("/apocalypse", (req, res) => {
  Person.remove();
  res.end();
});

module.exports = router;
