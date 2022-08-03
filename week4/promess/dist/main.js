$.get("/randomWord").then((word) => {
  console.log(word);
  $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`).then(
    (response) => {
      console.log(response);
    }
  );
});

$.get("/randomWord").then((word) => {
  console.log(word);
  let bookObject = $.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
  );
  let GIFObject = $.get(
    `https://api.giphy.com/v1/gifs/search?api_key=PU2j4y10zQLCrVjeePWJMEkaUbSxyjAq&q=${word}&limit=25&offset=0&rating=g&lang=en`
  );
  Promise.all([bookObject, GIFObject]).then(function (results) {
    console.log(results);
  });
});
