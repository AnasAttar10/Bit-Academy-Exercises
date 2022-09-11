const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SolarSystemSchema = new Schema({
  planets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
  starName: String,
});

const SolarSystem = mongoose.model("SolarSystem", SolarSystemSchema);
module.exports = SolarSystem;
