//show cart info
// -> pesquisar por cart-info
const cartInfo = document.getElementById('cart-info');
const cart = document.getElementById('cart');


//-> explicar o eventListener como funciona
cartInfo.addEventListener('click', function() {
    cart.classList.toggle('show-cart');
});


//add to cart

//-> pesquisar por store-item-icon
const cartItemButton = document.querySelectorAll('.store-item-icon');
//-> printar esse console
//-> explicar a lista com os números
console.log(cartItemButton);

cartItemButton.forEach(function(button) {
    //-> explicar esse console
    console.log(button);

    button.addEventListener('click', function(event) {
        console.log(event);

        if(event.target.parentElement.classList.contains('store-item-icon')) {
            console.log( event.target.parentElement.previousElementSibling );

            let fullPathImage = event.target.parentElement.previousElementSibling.src;

        }
    });
});
