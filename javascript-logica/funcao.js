//criando funções no javascript

//primeira forma de criar uma função

function olaNome() {
    console.log("Daniel");
}
function mostrarVariosNomes(nome, sobrenome) {
    console.log(nome);
    console.log(sobrenome);
}

olaNome();
olaNome(); 
olaNome();

mostrarVariosNomes("Daniel", "Gomes");
mostrarVariosNomes("João", "Souza");
mostrarVariosNomes("Maria", "Oliveira");

function escolherFruta(listaFrutas) {
    console.log(listaFrutas[0]);
}

const minhasFrutas = ["maçã", "banana", "laranja", "uva"];
escolherFruta(minhasFrutas);

function somar(num1, num2) {
    console.log(num1 + num2);
}
somar(1340, 20);

function operacoes(numA, numB){
    const calculadora = {
        soma: numA + numB,
        subtracao: numA - numB,
        multiplicacao: numA * numB,
        divisao: numA / numB,
    }
    console.log(calculadora.soma);
    console.log(calculadora.subtracao);
    console.log(calculadora.multiplicacao);
    console.log(calculadora.divisao);
}
operacoes(10, 5);

//template string

function apresentacao(nome, sobrenome, idade){
    const apresentacao = `Olá, meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.`;
    console.log(apresentacao);
}
apresentacao("Sergio", "Gomes", 22);



//segunda forma de criar uma função - funcao anonima

const subtracao = function(num1, num2) {
    console.log(num1 - num2);
};

subtracao(10, 5);

//terceira forma de criar uma função - arrow function
const divisao = (num1, num2) => {
    console.log(num1 / num2);
};
divisao(10, 5);

//escopo de bloco e escopo global
//variavel declarada fora de uma função é global, e pode ser acessada dentro de um escopo de bloco
//variavel declarada dentro de uma função é local, e não pode ser acessada fora do escopo da função