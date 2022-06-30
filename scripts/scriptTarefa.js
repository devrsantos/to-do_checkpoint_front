const inputTarefa = document.querySelector("#inputTarefa");
const btnCriar = document.querySelector("#btnCriar");
const tarefasPendentes = document.querySelector("#tarefasPendentes");

let getIdTasks;

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

const getTasksAll = () => {
    let getToken = JSON.parse(localStorage.getItem("Token"));
    fetch("https://ctd-todo-api.herokuapp.com/v1/tasks",{
        method: 'GET',
        headers:{
            'Accept': '*/* , application/json',
            'Content-Type': 'application/json',
            'authorization': `${getToken}`
        }
    }).then(res => {
        console.log(res.status);
    });
};

getTasksAll();

const getTasksOne = () => {
    let getToken = JSON.parse(localStorage.getItem("Token"));
    fetch(`https://ctd-todo-api.herokuapp.com/v1/tasks/{${getIdTasks}}`,{
        method: 'GET',
        headers:{
            'Accept': '*/* , application/json',
            'Content-Type': 'application/json',
            'authorization': `${getToken}`
        }
    }).then(res => {

    });
};

const postTasks = () => {
    let getToken = JSON.parse(localStorage.getItem("Token"));
    fetch("https://ctd-todo-api.herokuapp.com/v1/tasks",{
        method: 'POST',
        headers:{
            'Accept': '*/* , application/json',
            'Content-Type': 'application/json',
            'authorization': `${getToken}`
        },
        body: JSON.stringify({
            "description": "",
            "completed": false
        })
    }).then(res => {

    });
};

const delTasks = () => {
    let getToken = JSON.parse(localStorage.getItem("Token"));
    fetch(`https://ctd-todo-api.herokuapp.com/v1/tasks/{${getIdTasks}}`,{
        method: 'DELETE',
        headers:{
            'Accept': '*/* , application/json',
            'Content-Type': 'application/json',
            'authorization': `${getToken}`
        }
    }).then(res => {

    });
};

const putTasks = () => {
    let getToken = JSON.parse(localStorage.getItem("Token"));
    fetch(`https://ctd-todo-api.herokuapp.com/v1/tasks/{${getIdTasks}}`,{
        method: 'PUT',
        headers:{
            'Accept': '*/* , application/json',
            'Content-Type': 'application/json',
            'authorization': `${getToken}`
        },
        body: JSON.stringify({
            "description": "",
            "completed": false
        })
    }).then(res => {

    });
};
