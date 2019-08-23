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

            // Pegando imagem do DOOM
            let caminhoCompletoImagem = event.target.parentElement.previousElementSibling.src;
            let caminhoImagem = tratarCaminhoImagem(caminhoCompletoImagem);
            itemCarrinho.img = caminhoImagem;

            //Pegando preço do DOOM
            let precoProduto = event.target.parentElement.parentElement.parentElement;
            itemCarrinho.valor = trataPrecoProduto(precoProduto);
            
            console.log(itemCarrinho);
        }
    });
});


tratarCaminhoImagem = function(caminhoCompletoImagem) {
    let posicaoCaminhoImagem = caminhoCompletoImagem.indexOf('img') + 3;
    let caminhoReduzidoImagem = caminhoCompletoImagem.slice(posicaoCaminhoImagem);
    let caminhoImagemMiniatura = `img-cart${caminhoReduzidoImagem}`;
    return caminhoImagemMiniatura;
};

trataPrecoProduto = function(precoProduto) {
    let precoTotalProduto = parseInt(precoProduto.dataset.price);
    return precoTotalProduto;
}