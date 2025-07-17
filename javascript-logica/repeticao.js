//console.log("Sergio");
//console.log("Sergio");
//console.log("Sergio");
//console.log("Sergio");
//console.log("Sergio");

for (let i=0; i <= 4; i++){
    console.log("Sergio ");
}


const frutas = ["banana", "maçã", "laranja", "abacaxi"];

for (let i=0; i<=3; i++){
    console.log(frutas[i]);
}

for (let i=0; i<frutas.length; i++){
    console.log(frutas[i]);
}

const tenis = [
  {
    marca: "Nike",
    modelo: "Air Max",
    cor: "preto",
    tamanho: [42, 43, 44],
    preco: 499.99,
    estoque: 10,
  },
  {
    marca: "Adidas",
    modelo: "Ultraboost",
    cor: "branco",
    tamanho: [40, 41, 42],
    preco: 599.99,
    estoque: 5,
  },
  {
    marca: "Puma",
    modelo: "RS-X",
    cor: "azul",
    tamanho: [39, 40, 41],
    preco: 399.99,
    estoque: 8,
  },
  {
    marca: "Reebok",
    modelo: "Classic",
    cor: "cinza",
    tamanho: [38, 39, 40],
    preco: 299.99,
    estoque: 12,
  },
];

for (let i=0; i < tenis.length; i++) {
    tenis[i].estoque--;
    if (tenis[i].marca === "Puma"){
        tenis[i].preco = 299.99;
    }
    if (tenis[i].marca === "Reebok"){
        tenis[i].preco = 399.99;
    }
    if (tenis[i].marca === "Nike") {
        tenis[i].tamanho[tenis[i].tamanho.length] = 45;
    }
}

console.log(tenis); 
// ocorreu uma mudança no estoque no qual o estoque de cada um dos tenis foi reduzido em 1
// e o preço do puma entrou em promoção de 399.99 para 299.99
// e o preço do reebok aumentou de 299.99 para 399.99
// o tamanho do nike foi alterado para [42, 43, 44, 45]