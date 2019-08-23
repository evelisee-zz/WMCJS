

//-> explicar o eventListener como funciona
(function() {
    //show cart info
    // -> pesquisar por cart-info
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');
    cartInfo.addEventListener('click', function() {
        cart.classList.toggle('show-cart');
    });
})();


//add to cart

//-> pesquisar por store-item-icon
(function() {
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

                // Pegando preço do DOOM
                let precoProduto = event.target.parentElement.parentElement.parentElement;
                itemCarrinho.valor = trataPrecoProduto(precoProduto);

                // inserir no carrinho!
                inserirProdutoCarrinho(itemCarrinho);
                console.log(itemCarrinho);
            }
        });
    });


    tratarCaminhoImagem = function(caminhoCompletoImagem) {
        let posicaoCaminhoImagem = caminhoCompletoImagem.indexOf('img') + 3;
        let caminhoReduzidoImagem = caminhoCompletoImagem.slice(posicaoCaminhoImagem);
        return caminhoReduzidoImagem;
    };

    trataPrecoProduto = function(precoProduto) {
        let precoTotalProduto = parseInt(precoProduto.dataset.price);
        return precoTotalProduto;
    }

    inserirProdutoCarrinho = function(dadosProdutoComprado) {
        const divProdutoAddCarrinho = document.createElement('div');
        divProdutoAddCarrinho.classList.add(
            'cart-item',
            'd-flex',
            'justify-content-between',
            'text-capitalize',
            'my-3'
        );
        divProdutoAddCarrinho.innerHTML = `
            <img src="img-cart/${dadosProdutoComprado.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">

                <p id="cart-item-title" class="font-weight-bold mb-0">preço</p>
                <span>R$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${dadosProdutoComprado.valor}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
                <i class="fas fa-trash"></i>
            </a>
        `;

        let componentCarrinho = document.getElementById('cart');
        let totalCart = document.querySelector('.cart-total-container');
        componentCarrinho.insertBefore(divProdutoAddCarrinho, totalCart);
    }
})();