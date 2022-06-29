const inputTarefa = document.querySelector("#inputTarefa");
const btnCriar = document.querySelector("#btnCriar");
const tarefasPendentes = document.querySelector("#tarefasPendentes");
const trash = document.querySelector("#trash");


// ____________________ Criação de Tarefa ____________________

btnCriar.addEventListener("click", e => {
    e.preventDefault();
    tarefasPendentes.innerHTML+=`
    <li class="tarefa">
        <div id="btnFeito" class="not-done"></div>
        <div class="descricao">
            <p class="nome">${inputTarefa.value}</p>
            <p class="timestamp">Criada em: 15/07/21</p>
        </div>
        <button id="editar" ><i class="fa-solid fa-pen-to-square"></i></button>
        <button id="trash" ><i class="fa-solid fa-trash-can"></i></button>
     </li>`;
});

// trash.addEventListener("click",e =>{
//     e.preventDefault();
//     alert("funciona"); 

// });

// let getTasks = () => {

// }

// let delTasks = () => {

// }
// psotost
// let delTasks = () => {

// }
// put
// let delTasks = () => {

// }
