//criando obejtos com js

const  nayara = {
    nome: "Nayara",
    sobrenome: "Queiroz",
    idade: 30,
    profissao: "programadora",
    especialidade: "fullstack",
    corFavorita: ["preto", "azul"],
    estaCasada: true,

    falar(){
        return "Oi, meu nome é Nayara!"
    },
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
const {especialidade,corFavorita,idade,nome} = nayara;

console.log(especialidade);
console.log(corFavorita);
console.log(idade);
console.log(nome);

//desestruturacao (plus) de array
const [cor, cor2] = corFavorita;
console.log(cor);
console.log(cor2);

//como tirar propriedade do objeto
delete nayara.profissao;
console.log(nayara);
console.log(nayara.profissao) //undefined

//operador spread (...) funciona pra objeto e array
const pessoa = {
    nome:"Ana",
    idade: 25,
    temCarro: false,
}
const pessoa2 = {
    ...pessoa,
    altura: 1.64,
};
const pessoa3 = {
    ...nayara,
};

console.log(pessoa2);
console.log(pessoa3);

//...rest operator

const arrNumeros = [10,20,30,40,50,60];
const[n1,n2,...arrNumeros2] = arrNumeros;

console.log(n1);
console.log(n2);
console.log(arrNumeros2);

const frutas = ["morango","banana","manga","kiwi"];
const novaLista = [...arrNumeros, ...arrNumeros2, ...frutas]

console.log(novaLista);

//objetos com metodos
//oq é um metodo -> sao funçoes que executam uma acao do objeto
//um objeto tem propriedades e metodos

const fala = nayara.falar(); 
console.log(fala);



const lapiseira = {
    tipoGrafite: 0.9,
    corGrafite: "preto",
    corLapiseira: "Amarela",
    temRecarga: true,
    escrita(){
        return "a lapiseira está escrevendo"
    },
    grafiteQuebrou(){
        if(!lapiseira.temRecarga){
            return "não tem grafite para recarga";
            lapiseira.temRecarga = false;
        } else{
            return "o grafite quebrou, troque-o"
        }
    }
}
console.log(lapiseira);

const estado = lapiseira.escrita();
const grafite = lapiseira.grafiteQuebrou();

console.log(lapiseira);
console.log(estado);
console.log(grafite);


//criar um objeto chamado mercantil com array chamado produtos, que é um array de objetos, com as propiedades nome, valor e estoque. 
//criar um objeto chamado caixa com as propiedades valorCaixa com metodos como venda e contagem de estoque 