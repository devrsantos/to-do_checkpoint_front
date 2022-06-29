const inputTarefa = document.querySelector("#inputTarefa");
const btnCriar = document.querySelector("#btnCriar");
const tarefasPendentes = document.querySelector("#tarefasPendentes");




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
     </li>`;
});

