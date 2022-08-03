const axios = require("axios");

// Make a request for a user with a given ID
axios
  .get("http://data.nba.net/10s/prod/v1/2016/players.json")
  .then(function (response) {
    // handle success
    console.log(response);
  });
