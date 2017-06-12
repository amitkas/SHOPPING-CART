// an array with all of our cart items
var cart = [];


var STORAGE_ID = 'shoppingCart';

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


  var saveToLocalStorage = function () {
    localStorage.setItem(STORAGE_ID, JSON.stringify(cart));
  }

  var getFromLocalStorage = function () {
    cart = JSON.parse(localStorage['shoppingCart'] || '[]');
  }



$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {

    var item = $(this).closest('.card').data()
  addItem(item);
  updateCart();
  saveToLocalStorage();

});

$('.clear-cart').on('click', function () {
  clearCart();
});


getFromLocalStorage();
updateCart();
