//crie um mercantil funcional, com um array chamado mercantil que tenha objeots reperesentando produtos com nome, preço e quantidade em estoque.
//crie um objeto chamado caixa que tenha as propriedades saldo, produtosVendidos e metodos como vendaProduto, contar estoque, valorEmCaixa.
console.log("Desafio de objetos em JavaScript");
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

vendaProduto(produto, quantidade = 1) {
      if (produto.estoque >= quantidade) {
            produto.estoque -= quantidade;
            caixa.saldo += produto.preco * quantidade;
            caixa.produtosVendidos += quantidade;
            console.log(`Venda: ${quantidade} de ${produto.nome}`);
      } else {
            console.log(`Estoque insuficiente de ${produto.nome}`);
            }
      },
      contarEstoque() {
            let totalEstoque = 0;
            for (let i = 0; i < mercantil.length; i++) {
                  let produto = mercantil[i];
                  console.log('- ' + produto.nome + ': ' + produto.estoque + ' unidades');
                  totalEstoque += produto.estoque;
            }
            console.log (`Estoque total: ${totalEstoque} unidades`)
      },
      valorEmCaixa(){
            console.log(`Valor em caixa: R$ ${caixa.saldo.toFixed(2)}`);
      },
      menu(opcao){
      switch(opcao) {
            case 1:
                  caixa.vendaProduto(mercantil[0], 3);
                  break;
            case 2:
                  caixa.vendaProduto(mercantil[2], 2);
                  break;
            case 3:
                  caixa.contarEstoque();
                  break;
            case 4:
                  caixa.valorEmCaixa();
                  break;
            default:
                  console.log("Opção inválida.");
      }
}
};

console.log("Bem-vindo ao Mercantil!");
console.log("Temos um menu de opções:");
console.log("1. Vender 3 unidades de Arroz");
console.log("2. Vender 2 unidades de Macarrão");
console.log("3. Contar estoque de produtos");
console.log("4. Ver valor em caixa");

caixa.menu(1);
caixa.menu(2);
caixa.menu(3);
caixa.menu(4);

console.log("Obrigado por usar o mercantil.");