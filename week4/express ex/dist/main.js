const fetchBookData = function () {
  let input = $("#price").val();

  $.get(`/priceCheck/${input}`, function (price) {
    $("body").append(`<div>${price.price} </div>`);
  });
};

const fetchbuyanyThing = function () {
  let input = $("#store").val();
  $.get(`/buy/${input}`, function (item) {
    // console.log("hi ");
    alert(
      `Congratulations, you’ve just bought ${item.name} for ${item.price}. There are ${item.inventory} left now in the store.`
    );
  });
};
