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
// console.log(cartItemButton);

let itemCarrinho = { img: '', valor: 0 };
console.log(itemCarrinho)

cartItemButton.forEach(function(button) {
    //-> explicar esse console
    // console.log(button);

    button.addEventListener('click', function(event) {
        // console.log(event);

        if(event.target.parentElement.classList.contains('store-item-icon')) {
            // console.log(event.target.parentElement.previousElementSibling);
            //-> fazer da forma ruim
           // let caminhoCompletoImagem = event.target.parentElement.previousElementSibling.src;
            //let posicaoCaminhoImagem = caminhoCompletoImagem.indexOf('img') + 3;
            //-> arrumar para uma funcion
            //tratarCaminhoImagem(caminhoCompletoImagem);
            let caminhoDaImagem = tratarCaminhoImagem(caminhoCompletoImagem);
            itemCarrinho.img = caminhoDaImagem;


        }
    });
});


tratarCaminhoImagem = function(caminhoImagem) {
    let posicaoCaminhoImagem = caminhoImagem.indexOf('img') + 3;
    let partPath = caminhoImagem.slice(posicaoCaminhoImagem);
    return partPath;
};