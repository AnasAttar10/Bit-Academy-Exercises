const mongoose = require("mongoose");
const Schema = mongoose.Schema;
console.log("Person");
const personSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);
module.exports = Person;
