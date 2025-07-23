//criando obejtos com js

const  nayara = {
    nome: "Nayara",
    sobrenome: "Queiroz",
    idade: 30,
    profissao: "programadora",
    especialidade: "fullstack",
    corFavorita: ["preto", "azul"],
    estaCasada: true,
};

console.log(nayara);
console.log(nayara.profissao);

//2ª forma de acessar os dados do objeto, é com os colchetes e acessando o nome da propriedade
console.log(nayara["idade"]);
console.log(nayara["corFavorita"]);

//alterando valores do objeto
nayara.idade = 31;
nayara["especialidade"] = "Front-end";
console.log(nayara);

//adicionando propriedades do objeto, só colocar o nome da nova propriedade, como se eu tivesse adicionando algo em uma outra propiedade
nayara.altura = 1.53;
console.log(nayara);

//desestruturacao (destructuring) usado no react
const {corFavorit} = nayara;

//console.log(especialidade);
console.log(corFavorita);
//console.log(idade);
//console.log(nome);

//desestruturacao (plus) de array
const [cor, cor2] = corFavorita;
console.log(cor);
console.log(cor2);

