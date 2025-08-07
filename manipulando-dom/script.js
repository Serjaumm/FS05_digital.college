const nome = document.querySelector("#root");
const formulario = document.querySelector("#formulario");
const email = formulario[0];
const senha = formulario[1];
const inputTarefa = document.querySelector("#tarefa");
const containerTarefas = document.querySelector("#container-tarefas");
const btnAdicionar = document.querySelector("#btn-adicionar");

console.log(nome);
console.log(formulario);

nome.textContent = "Aqui vou acessar os dados do formulario abaixo";

function enviandoFormulario(event){
    event.preventDefault();//evita o recarregamento da pag quando o formulario é enviado

    if (!email.value || !senha.value){
        console.log("Credenciais não preenchidas, preencha os campos");
        return;
    }
    const credenciais = {
        email: email.value,
        senha: senha.value.trim(),
    };  
    console.log(credenciais);
};

formulario.onsubmit = enviandoFormulario;

function criarTarefa(){
    //conferindo se o campo está vazio ou não
    if (!inputTarefa.value) {
        console.log("Tarefa não preenchida, preencha o campo com uma tarefa");
        return;
    }

    //capturando o que o usuário digitou no input
    const tarefa = inputTarefa.value;

    //criando a tag li
    const linhaLista = document.createElement("li");
    
    //colocando os dados digitados pra dentro da li
    linhaLista.textContent = tarefa;
    
    //colocando o li pra dentro do ul
    containerTarefas.appendChild(linhaLista);

    //limpando o input
    inputTarefa.value = "";

    console.log("Aqui vou criar minha tarefa");
};

btnAdicionar.onclick = criarTarefa;






const num1 = document.querySelector("#numero1");
const num2 = document.querySelector("#numero2");
const divResultado = document.querySelector("#resultado");
const btnSomar = document.querySelector("#btn-somar");

function somarNumeros(){
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    const resultado = n1 + n2;
    
    const linhaSoma = document.createElement("p");
    linhaSoma.textContent = resultado;
    divResultado.appendChild(linhaSoma);
    num1.value = "";
    num2.value = "";    
};

btnSomar.onclick = somarNumeros;