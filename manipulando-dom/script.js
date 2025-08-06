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

    const credenciais = {
        email: email.value,
        senha: senha.value.trim(),
    };  
    console.log(credenciais);
};

formulario.onsubmit = enviandoFormulario;

function criarTarefa(){
    console.log("Aqui vou criar minha tarefa");
};

btnAdicionar.onclick = criarTarefa();
