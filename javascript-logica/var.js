// aprendendo variaveis e tipos de dados em javascript
/*
//string
"Sergio Daniel";
"Uma frase aleatória";
'Pereira Gomes';
`Como que vou usar aspas simples, duplas e crase?`;

//number
12;
1223;
1.23;
-12;

//boolean
true
false

//undefined
undefined;

//null
null;
*/

//variaveis
const nome = "Sergio Daniel";
let idade = 22;
const altura = 1.84;
let estaCasado = true;
const tipoSanguineo = "A+";
let numeroQualquer;
const profissao = "Programador";

//visualizando variaveis no console
console.log(profissao);
console.log(idade);
console.log(altura);
console.log(estaCasado);
console.log(tipoSanguineo);
console.log(numeroQualquer);

numeroQualquer = 1234567890;
console.log(numeroQualquer);

//operaçoes matematicas

let resultadoSoma = 55 + 33;
console.log(resultadoSoma);
let resultadoFrase = "Sergio " + "Daniel";
console.log(resultadoFrase);

let resultadoSubtracao = 55 - 33;
console.log(resultadoSubtracao);
let resultadoMultiplicacao = 55 * 33;
console.log(resultadoMultiplicacao);
let resultadoDivisao = 55 / 33;
console.log(resultadoDivisao);

//array
const frutas = ["maçã", "banana", "laranja", "pera"];

let listaVariada = [100, true, "texto", frutas, 45.5];

console.log(frutas);
console.log(listaVariada);

let frutaEscolhida = frutas[2];
console.log(frutaEscolhida);

listaVariada[5] = 100;
console.log(listaVariada);

//length
console.log(frutas.length);
console.log(listaVariada.length);

const nomeCompleto = "Sergio Daniel Pereira Gomes";
console.log(nomeCompleto.length);

//objetos
const pessoa = {
    nome: "Sergio Daniel",
    idade: 22,
    altura: 1.84,
    estaCasado: true,
    tipoSanguineo: "A+",
    profissao: "Programador",
    carro: {
        marca: "Fiat",
        modelo: "Uno",
        ano: 2013
    }
};

//operadores de comparação

console.log(10 > 5); //maior que (true)
console.log(10 < 5); //menor que (false)
console.log(10 >= 5); //maior ou igual que (true)
console.log(10 <= 5); //menor ou igual que (false)
console.log(10 == 5); //igual a (false) aqui ele compara apenas o valor
console.log(10 === 10); //estritamente igual a (true) aqui ele compara o valor e o tipo
console.log(10 !== 5); //diferente de (true) aqui ele compara o valor e o tipo

//operadores lógicos
//e (&&)
//ou (||)
//não (!)

console.log(10 > 2 || 5 < 2);
console.log("Rodrigo" === "Rodrigo" && 10 =="10");