//metodods - arrays
//metodos são funçoes dentro de objetos
//metodos de arrays -> são funções em posições do array, que se comporta como objeto, estruturalmente.


//essa estrutura é um array e o tipo é objeto
const frutas = ["morango", "laranja", "manga"];

//essa estrutura é um obejto e o tipo é objeto
const pessoa = {
    nome: "Sérgio",
    idade: 23,
    
    mensagem(){
        console.log("Oi, eu me chamo Sérgio")
    },
};

console.log(typeof "Sergio");
console.log(typeof true);
console.log(typeof 40);
console.log(typeof pessoa); // é um objeto
console.log(typeof frutas); // é um array, mas e identificado como objeto

pessoa.mensagem();

//criar array utilizando new array()

let numeros = new Array(100, 20, 30, 600, -5, -20);

console.log(numeros[1]);
console.log(numeros[0]);

//metodos de arrays

//push () - adiciona um elemento ao final do array
frutas.push("abacaxi");
console.log(frutas);

//unshift() - adiciona um elemento no inicio do array
frutas.unshift("limão");
console.log(frutas);

//pop() - remove o ultimo elemento do array 
frutas.pop();
console.log(frutas)

//shift() - remove o primeiro elemento do array
frutas.shift();
console.log(frutas);

//splice() - adiciona, remove ou substitui elementos em uma posição específica
frutas.splice(1, 2, "mamao", "kiwi", "pitomba");
frutas.splice(4, 0, "uva")
console.log(frutas);

//slice() - retorna uma copia de parte do array sem modificar o array original
const novoFrutas = frutas.slice(1,4); 
console.log(novoFrutas);
console.log(frutas);

//map() - cria um novo array aplicando uma função para cada elemento
 
//qunado passamos uma função por parametro atraves de outra função, chamamos de callback
const numerosDobrados = numeros.map((item, index)=>{
    return item * 2;    
});
console.log(numerosDobrados)

const numerosImparesDobrados = numeros.map((item,index)=>{
    if (index % 2 !== 0){
        return item * 2;
    } else {
        return item;
    }
});
console.log(numerosImparesDobrados);

//filter() - retorna um novo array apenas com os elementos que atendem uma condição
const meuArrayNumeros = [1, 2, 3, 4, 5, 6];