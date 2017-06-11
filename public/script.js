// an array with all of our cart items
var cart = [];

var updateCart = function () {
            $('.cart-list').empty()

    var source = $('#item-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(cart);
    $('.cart-list').append(newHTML)


}


var addItem = function (item) {
        cart.push(item)
}



var clearCart = function () {

cart.length = 0
  updateCart()
}





$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {

    var item = $(this).closest('.card').data()
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

updateCart();
