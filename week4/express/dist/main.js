const changeColor = function (div) {
  div.style.backgroundColor = "#3498db";
};

const fetchBookData = function () {
  let input = $("#book-input").val();

  $.get(`book/${input}`, function (bookData) {
    $("body").append(`<div>${bookData}`);
  });
};
