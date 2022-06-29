const novaTarefa = document.querySelector("#novaTarefa");
const btnCriar = document.querySelector("#btnCriar");
const tarefasPendentes = document.getElementsByClassName("#tarefasPendentes");
const tarefas = document.getElementByTagName("ul")
const btnFeito = document.querySelector("#btnFeito");
const nomeTarefa = document.querySelector(".nome");



// ____________________ Criação de Tarefa ____________________

btnCriar.addEventListener("click", e => {
    e.preventDefault();
    tarefas.innerHTML+=`
    <li class="tarefa">
        <div id="btnFeito" class="not-done"></div>
        <div class="descricao">
            <p class="nome">${novaTarefa.value}</p>
            <p class="timestamp">Criada em: 15/07/21</p>
        </div>
     </li>`
});

// ____________________ Tarefa Feita ____________________

btnFeito.addEventListener("click", e => {
    e.preventDefault();
    tarefas.
    check.classList.remove("");
    check.classList.add("fa-check");
});