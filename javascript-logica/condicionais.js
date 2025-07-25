// if/else

let email = "ana@gmail.com";
let senha = "123456";

if (senha === "1234" || email === "ana@gmail.com") {
  console.log("Voce fez o login");
} else {
  console.log("A senha ou email está errada");
}

let hora = 24;

if (hora >= 0 && hora < 12) {
  console.log("Bom dia");
} else if (hora >= 12 && hora < 18) {
  console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite");
}

//operador ternário

let idade = 15;

let resultado = idade >= 18 ? "é maior de idade" : "é menor de idade";

console.log(resultado);

//EXERCICIOS CONDICIONAIS

// 1.	Crie uma função que receba um número e exiba se ele é positivo, negativo ou zero.
function verificaNumero(numero) {
  if (numero < 0) {
    console.log("NEGATIVO");
  } else if (numero > 0) {
    console.log("POSITIVO");
  } else {
    console.log("O NUMERO é ZERO");
  }
}

console.log(verificaNumero(3));
console.log(verificaNumero(-5));
console.log(verificaNumero(0));

// 2.	Crie uma função que receba o nome de uma pessoa. Se o nome tiver mais de 5 letras, retorne “Nome longo”, senão “Nome curto”.
function verificaNome(nome) {
  if (nome.length > 5) {
    return "Nome longo";
  } else {
    return "Nome curto";
  }
}

console.log(verificaNome("Ana"));
console.log(verificaNome("Rodrigo"));

// 3.	Crie uma função que receba a idade de uma pessoa e retorne se ela é “Criança”, “Adolescente”, “Adulto” ou “Idoso”.
function classificarIdade(idade) {
  if (idade < 0) {
    return "Digite um numero positivo";
  }

  if (idade < 12) {
    return "Criança";
  } else if (idade < 18) {
    return "Adolecente";
  } else if (idade < 60) {
    return "Adulto ";
  } else {
    return "Idoso";
  }
}

// 4.	Crie uma função que receba dois números e retorne o maior deles.
function maiorNumero(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// 5.	Crie uma função que receba um número e retorne true se for par, e false se for ímpar.
function numeroPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// 6.	Crie uma função que receba o valor de uma compra. Se o valor for maior que 100, aplique 10% de desconto e retorne o novo valor.
function aplicaDesconto(valor) {
  if (valor > 100) {
    return valor * 0.9;
  } else {
    return valor;
  }
}

// 7.	Crie uma função que receba o nome de um aluno e sua nota. Retorne “Aprovado” se a nota for >= 6, senão “Reprovado”.
function resultadoAluno(nome, nota) {
  if (nota >= 6) {
    return `${nome} está Aprovado`;
  } else {
    return `${nome} está Reprovado`;
  }
}

// 8.	Crie uma função que receba dois números e retorne se eles são iguais, se forem diferentes, qual deles é o maior.
function comparar(a, b) {
  if (a === b) {
    return "Iguais";
  } else if (a > b) {
    return "A é maior";
  } else {
    return "B é maior";
  }
}

// 9.	Crie uma função que receba um número e informe se ele é múltiplo de 3, de 5, de ambos ou de nenhum.
function multiplo(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "Múltiplo de 3 e 5";
  } else if (numero % 3 === 0) {
    return "Múltiplo de 3";
  } else if (numero % 5 === 0) {
    return "Múltiplo de 5";
  } else {
    return "Não é múltiplo";
  }
}

// 10.	Crie uma função que receba o salário de um funcionário e retorne a faixa salarial:
// •	até 2000: “Baixa”
// •	até 5000: “Média”
// •	acima: “Alta”
function faixaSalarial(salario) {
  if (salario <= 2000) {
    return "Baixa";
  } else if (salario <= 5000) {
    return "Média";
  } else {
    return "Alta";
  }
}

// 11.	Crie uma função que receba a quantidade de horas dormidas. Retorne:

// •	menos de 6h: “Pouco sono”
// •	entre 6 e 8h: “Sono normal”
// •	mais de 8h: “Muito sono”
function horasDormidas(horas) {
  let horasDeSono = 7;

  switch (true) {
    case horas <= 6:
      console.log("Pouco sono");
      break;
    case horas >= 6 && horas <= 8:
     console.log("Sono normal");
      break;
    case horas >8:
     console.log("Muito sono");
      break;
    default:console.log("horas inválidas");
}
}

// 12.	Crie uma função que receba dois números e uma string representando a operação (“soma”, “subtração”, “multiplicação”, “divisão”) e retorne o resultado.
function calcular(n1, n2, operador) {
  let n1 = 10;
  let n2 = 5;
  let operador = "soma"; // pode ser "soma", "subtração", "multiplicação" ou "divisão"
  switch (operador) {
    case "soma":
      console.log ("resultado da soma:" (n1 + n2));
      break;
    case "subtração":
      console.log("Resultado da subtração:" (n1 - n2));
      break;
    case "multiplicação":
      console.log("Resultado da multiplicação:"(n1*n2));
      break;
    case "divisão":
      console.log("Resultado da divisão:"(n1/n2));
      break;
    default:console.log("operador inválido");
}}



// 13.	Crie uma função que receba um ano e diga se ele é bissexto (divisível por 4 e não por 100, exceto se for divisível por 400).


// 14.	Crie uma função que receba um objeto pessoa com nome e idade. Se a idade for maior que 60, retorne “Idoso”, senão “Não idoso”.
function verificaIdoso(pessoa) {
  let pessoa = {
    nome:"José",
    idade: 65,
  };
  switch (pessoa.idade){
    case pessoa.idade > 60:
      console.log("Idoso");
      break;
    case pessoa.idade <= 60:
      console.log("Não idoso");
      break;
    default: console.log("Idade inválida");
  }
  }

// 15.	Crie uma função que receba a idade de duas pessoas. Verifique se podem entrar juntas em um evento (ambas com 18+).
function verificaDeMaior(idade1, idade2) {
  let idade1 = 20;
  let idade2 = 17;
  switch (true) {
    case idade1 >=18 && idade2 >= 18:
      console.log("Ambas podem entrar no evento");
      break;
    default: console.log("Não podem entrar juntas no evento");
  }
}

// 16.	Crie uma função que receba três notas e retorne a média e a situação:
// •	média >= 7: “Aprovado”
// •	média >= 5: “Recuperação”
// •	média < 5: “Reprovado”
function verificaMedia(n1,n2,n3) {
  let n1 = 7;
  let n2 = 6;
  let n3 = 10;
  const media = (n1 + n2 + n3) / 3;
  switch (true) {
    case media >=7:
      console.log("Aprovado");
      break;
    case media >= 5:
      console.log("Recuperação");
      break;
    case media < 5:
      console.log("Reprovado");
      break;
    default:
      console.log("Notas inválidas");
  }}    

// 17.	Crie uma função que receba uma string e verifique se o primeiro caractere é uma vogal.
function verificaString(string){
  let string = "Ana";
  switch (string.CharAt(0).toLowerCase()){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      console.log("O primeiro caractere é uma vogal");
      break;
    default:
      console.log("O primeiro caractere não é uma vogal");
  }
}

// 18.	Crie uma função que receba um número de 0 a 10 e diga se ele está dentro da faixa ou fora.
function verificaFaixa(numero) {
  let numero = 5;
  switch (true) {
    case numero >= 0 && numero <= 10:
      console.log("O número está dentro da faixa");
      break;
    default:
      console.log("O número está fora da faixa");
  }
}

// 19.	Crie uma função que receba o nome de um produto e o estoque. Se o estoque for zero, retorne “Produto esgotado”, senão “Disponível”.
function verificaEstoque(produto, estoque) {
  let produto = "Maçã";
  let estoque = 0;
  switch (true) {
    case estoque === 0:
      console.log ("Produto esgotado");
      break;
    case estoque > 0:
      console.log ("Disponível");
      break;
    default:
      console.log("Produto inválido");
  }
}

// 20.	Crie uma função que receba um array com 3 números e retorne qual deles é o menor.
function menorNnumero(num){
  let num = [5,8,2];
  let menor 

  switch (true) {
    case num[0] <= num[1] && num[0] <= num[2]:
      menor = num[0];
      break;
    case num[1] <= num[0] && num[1] <= num[2]:
      menor = num[1];
      break;
    case num[2] <= num[0] && num[2] <= num[1]:
      menor = num[2];
      break;
    default:
      menor = "Todos os números são iguais";   
  }
}

// 21.	Crie uma função que receba um objeto carro com marca e ano. Se o carro for após 2015, retorne “Moderno”, senão “Antigo”.
function verificaAnoCarro (carro){
  let carro = 
  {
    marca: "Volkswagen",
    ano: 2014
  }
  switch (true){
    case carro.ano > 2015:
      console.log("Moderno");
      break;
    case carro.ano <= 2015:
      console.log("Antigo");
      break;
    default:
      console.log("Ano inválido");
  }
}

// 22.	Crie uma função que receba um valor booleano e retorne “Ligado” se for true, e “Desligado” se for false.
function verificaBooleano(valor) {
  switch (valor) {
    case true:
      console.log("Ligado");
      break;
    case false:
      console.log("Desligado");
      break;
    default:
      console.log("Valor inválido");
  }
}

// 23.	Crie uma função que receba um número e diga se ele está entre 10 e 20 (inclusive).
function verificaNumeroIntervalo(numero){
  switch (true) {
    case numero >= 10 && numero <= 20:
      console.log("O número está entre 10 e 20");
      break;
    default:
      console.log("O número não está entre 10 e 20");
      break;
  }
}

// 24.	Crie uma função que receba um objeto usuario com a propriedade ativo (true/false). Se ativo for false, retorne “Acesso bloqueado”.
function verificaPessoa(pessoa) {
  let pessoa = 
  {
    nome: "Sergio",
    ativo: false,
  }
  switch (pessoa){
    case false:
      console.log ("Acesso bloqueado");
      break;
    case true:
      console.log ("Acesso permitido");
      break;
    default:
      console.log ("Usuário inválido");
  }
}

// 25.	Crie uma função que receba o peso e altura e calcule o IMC. Retorne a faixa:
// •	IMC < 18.5: “Abaixo do peso”
// •	IMC < 25: “Normal”
// •	IMC < 30: “Sobrepeso”
// •	Acima: “Obesidade”
function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);

  switch (true) {
    case imc < 18.5:
      console.log("Abaixo do peso");
      break;
    case imc < 25:
      console.log("Normal");
       break;
    case imc < 30:
     console.log("Sobrepeso");
      break;
    default:
      console.log("Obesidade");
      break;
  }
}

// 26.	Crie uma função que receba uma temperatura em Celsius e indique:
// •	abaixo de 10: “Muito frio”
// •	entre 10 e 25: “Clima agradável”
// •	acima de 25: “Muito calor”
function verificaTemperatura(temperatura) {
  let temperatura = 15;
  switch (true){
    case temperatura <10:
      console.log("Muito frio");
      break;
    case temperatura >=10 && temperatura <= 25:
      console.log("Clima agradável");
      break;
    default:
      console.log("Muito calor");
      break;
  }
} 

// 27.	Crie uma função que receba dois números e diga se um é divisor exato do outro.
function verificaDivisao(n1,n2){
  let n1 = 10;
  let n2 = 5;
  switch (true){
    case n1 % n2 === 0:
      console.log(`${n2} é divisor exato de ${n1}`);
      break;
    case n2 % n1 === 0:
      console.log(`${n1} é divisor exato de ${n2}`);
      break;
    default:
      console.log("Nenhum é divisor exato do outro");
  }
}

// 28.	Crie uma função que receba o turno de estudo de um aluno (“manhã”, “tarde”, “noite”) e retorne uma saudação apropriada.
function saudacaoTurno(turno){
  let turno = "tarde";
  switch (turno) {
    case "manhã":
      console.log("Bom dia");
      break;
    case "tarde":
      console.log("Boa tarde");
      break;
    case "noite":
      console.log("Boa noite");
      break;
    default:
      console.log("Turno inválido");
  }
}

// 29.	Crie uma função que receba o número de faltas de um aluno. Se for maior que 25, retorne “Reprovado por falta”.
function verificaFaltas(faltas){
  let faltas = 28;
  switch(true){
    case faltas > 25:
      console.log("Reprovado por falta");
      break;
    case faltas <= 25:
      console.log("Aprovado");
      break;
    default:
      console.log("Número de faltas inválido");
  }
}

// 30.	Crie uma função que receba um nome e uma idade. Se o nome for “admin” e a idade maior que 18, retorne “Acesso total”. Caso contrário, “Acesso limitado”.
function verificaAcesso(nome,idade){
  let nome = "admin";
  let idade = 20;

  switch (true) {
    case nome === "admin" && idade > 18:
      console.log("Acesso total");
      break;
    default:
      console.log("Acesso limitado");
  }
}


let diaSemana = 2;

switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log(" Dia inválido");
}

let idade1 =25;

switch (true) {
  case idade1 >= 0 && idade1 <= 12:
    console.log("Criança");
    break;
  case idade1 >= 13 && idade1 <= 17:
    console.log("Adolescente");
    break;
  case idade1 >= 18 && idade1 <= 59:
    console.log("Adulto");
    break;
  case idade1 >= 60:
    console.log("Idoso");
    break;
  default:
    console.log("Idade inválida");
}

let nota = 8.2;

switch (true) {
  case nota >= 9:
    console.log ("Conceito A");
    break;
  case nota >= 7:
    console.log ("Conceito B");
    break;
  case nota >=5:
    console.log ("Conceito C");
    break;
  case nota >= 3:
    console.log ("Conceito D");
    break;
  default:
    console.log ("Conceito F");
}