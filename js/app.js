let valorTotal;
limpar();

function adicionar(){
    let produtoEValor = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    let [produto, valorUnitario] = produtoEValor.split("-");
    valorUnitario = valorUnitario.replace('R$', '');
    let preco = valorUnitario * quantidade;
    
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`

    valorTotal = valorTotal + preco;
    let campoValorTotal = document.getElementById('valor-total');
    campoValorTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}