//crie um mercantil funcional, com um array chamado mercantil que tenha objeots reperesentando produtos com nome, preço e quantidade em estoque.
//crie um objeto chamado caixa que tenha as propriedades saldo, produtosVendidos e metodos como vendaProduto, contar estoque, valorEmCaixa.

const mercantil = [
      {nome: "Arroz", preco: 4.00, estoque: 50},
      {nome: "Feijão", preco: 5.00, estoque: 30},
      {nome: "Macarrão", preco: 3.00, estoque:35},
      {nome: "Óleo", preco: 8.00, estoque: 20},
      {nome: "Açúcar", preco: 4.50, estoque: 40},
      {nome: "Biscoito", preco: 2.00, estoque: 60},
      {nome: "Leite", preco: 3.50, estoque: 25},
];
const caixa ={
   saldo: 0,
   produtosVendidos: 0,

vendaProduto(nome, preco, quantidade) {
      for (let i = 0; i < mercantil.length; i++) {
            if (mercantil[i].nome === nome){
                  if (mercantil[i].estoque >= quantidade){
                        mercantil[i].estoque -= quantidade;
                        caixa.saldo += preco * quantidade;
                        caixa.produtosVendidos += quantidade;
                        console.log(`Venda realizada: ${quantidade} x ${nome}`);
                  }     else {
                        console.log(`Estoque insuficiente de ${nome}`);
                        }
                  }
            }
      console.log("Produto não encontrado: " + nome);
      },
      contarEstoque() {
            let totalEstoque = 0;
            for (let i = 0; i < mercantil.length; i++) {
                  totalEstoque += mercantil[i].estoque;
            }
            console.log (`Estoque total: ${totalEstoque} unidades`)
      },
      valorEmCaixa(){
            console.log(`Valor em caixa: R$ ${caixa.saldo.toFixed(2)}`);
      }
};
