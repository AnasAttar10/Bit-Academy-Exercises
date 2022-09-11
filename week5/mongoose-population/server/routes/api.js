const express = require("express");
const router = express.Router();
const SolarSystem = require("../../models/SolarSystem");
const Visitor = require("../../models/Visitor");
const Planet = require("../../models/Planet");

let s1 = new SolarSystem({
  planets: [],
  starName: "andromida",
});

let s2 = new SolarSystem({
  planets: [],
  starName: "Milky Way",
});

let p1 = new Planet({
  name: "karpnton",
  system: s1,
  visitors: [],
});

let p2 = new Planet({
  name: "earth",
  system: s1,
  visitors: [],
});

let p3 = new Planet({
  name: "Oceanu",
  system: s1,
  visitors: [],
});

let p4 = new Planet({
  name: "Siren",
  system: s2,
  visitors: [],
});
let v1 = new Visitor({
  name: "superman",
  homePlanet: p2,
  visitedPlanets: [],
});

// s1.planets.push(p1);
// s1.planets.push(p2);
// s1.planets.push(p3);
// s2.planets.push(p4);

// p1.visitors.push(v1);

// v1.visitedPlanets.push(p1);

// p1.visitors.push(v1);
// p2.visitors.push(v1);
// p3.visitors.push(v1);

// s1.save();
// s2.save();
// p1.save();
// p2.save();
// p3.save();
// p4.save();
// v1.save();

// Visitor.find({})
//   .populate("visitedPlanets")
//   .exec(function (err, visitors) {
//     visitors.forEach((visitor) => {
//       console.log(visitor);
//     });
//   });

// Planet.find({})
//   .populate("visitors")
//   .exec(function (err, planets) {
//     planets.forEach((planet) => {
//       console.log(planet);
//     });
//   });

// SolarSystem.find({})
//   .populate({
//     path: "planets",
//     populate: {
//       path: "visitors",
//     },
//   })
//   .exec(function (err, SolarSystems) {
//     SolarSystems.forEach((SolarSystem) => {
//       let planets = SolarSystem.planets;
//       let visitors;
//       planets.forEach((Planet) => {
//         visitors = Planet.visitors;
//       });
//       visitors.forEach((visitor) => {
//         console.log(visitor);
//       });
//     });
//   });

// Visitor.find({})
//   .populate({
//     path: "homePlanet",
//     populate: {
//       path: "system",
//     },
//   })
//   .exec(function (err, Visitors) {
//     Visitors.forEach((Visitor) => {
//       console.log(Visitor);
//     });
//   });

module.exports = router;
