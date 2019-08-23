
// Toggle menu carrinho
(function() {
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');
    cartInfo.addEventListener('click', function() {
        cart.classList.toggle('show-cart');
    });
})();

// Adicionar ao carrinho
(function() {
    const cartItemButton = document.querySelectorAll('.store-item-icon');

    let itemCarrinho = { img: '', valor: 0 };
    console.log(itemCarrinho);

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
        const totalCart = document.querySelector('.cart-total-container');
        componentCarrinho.insertBefore(divProdutoAddCarrinho, totalCart);
        
        let contador = document.getElementById('item-count');
        contador.innerText = parseInt(contador.innerText) + 1;
        alert('Produto adicionado ao carrinho!');

        atualizarTotal();
    }

    atualizarTotal = function() {
        let total = 0;
        const itensCarrinho = document.querySelectorAll('.cart-item-price');

        itensCarrinho.forEach(function(elemento) {
            total += parseFloat(elemento.textContent);
        });

        let valorTotalButton = document.querySelector('.item-total');
        let valorTotalMenu = document.getElementById('cart-total');
        valorTotalButton.innerHTML = total;
        valorTotalMenu.innerHTML = total;

    }

})();

// Remover produto do carrinho
(function() {
    const botaoRemoverProduto = document.querySelectorAll('.cart-item-remove');
    botaoRemoverProduto.forEach(function(button) {

       button.addEventListener('click', function() {
           let containerProduto = button.parentElement;
           let precoProduto = containerProduto.querySelector('#cart-item-price');
           atualizarTotalRemover(precoProduto.textContent);
           alert('Produto removido com sucesso!');
           button.parentElement.remove();
       });
    });


    atualizarTotalRemover = function(preco) {
        let valorTotalButton = document.querySelector('.item-total');
        let valorTotalMenu = document.getElementById('cart-total');
        valorTotalButton.innerHTML = parseFloat(valorTotalButton.textContent - preco);
        valorTotalMenu.innerHTML = parseFloat(valorTotalMenu.textContent - preco);

        let contador = document.getElementById('item-count');
        contador.innerText = parseInt(contador.innerText) - 1;
    }
})();