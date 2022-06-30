const inputTarefa = document.querySelector("#inputTarefa");
const btnCriar = document.querySelector("#btnCriar");
let tarefasPendentes = document.querySelector("#tarefasPendentes");
let time = new Date().toLocaleString();
let trash;
let pen;
// ____________________ Criação de Tarefa ____________________

btnCriar.addEventListener("click", e => {
    e.preventDefault();
    postTasks();
});


let gerarListaTarefas = (params) => {
    tarefasPendentes.innerHTML+=`
    <li class="tarefa">
        <div id="btnFeito" class="not-done"></div>
        <div class="descricao">
            <p class="nome">${params}</p>
            <p class="timestamp">Criada em: ${time}</p>
        </div>
        <i class="fa-solid fa-trash-can" id="trash"></i>
        <i class="fa-regular fa-pen-to-square"></i>
    </li>`;
};



// __________________ codigos API ____________________
const getTasksAll = () => {
    let getToken = localStorage.getItem("Token");
    fetch("https://ctd-todo-api.herokuapp.com/v1/tasks",{
        method: 'GET',
        headers:{
            'Accept': '*/* , application/json',
            'Content-Type': 'application/json',
            'authorization': `${getToken}`
        }
    }).then(res => {
        if (res.status == 200) {
            res.json().then(data => {
                console.log(data);
                for (let i = 0; i < data.length; i++) {
                    gerarListaTarefas(data[i].description);
                }
                trash = document.querySelectorAll("#trash");
                
                trash.forEach((ele, i) => {
                    ele.addEventListener("click", () => {
                        delTasks(data[i].id);
                    });
                });
            });
        }
    });
};

getTasksAll();

const getTasksOne = () => {
    let getToken = localStorage.getItem("Token");
    fetch(`https://ctd-todo-api.herokuapp.com/v1/tasks/${getIdTasks}`,{
        method: 'GET',
        headers:{
            'Accept': '*/* , application/json',
            'Content-Type': 'application/json',
            'authorization': `${getToken}`
        }
    }).then(res => {
        if (res.status == 200) {
            res.json().then(data => {
                console.log(data);
            })
        }
    });
};

const postTasks = () => {
    let getToken = localStorage.getItem("Token");
    fetch("https://ctd-todo-api.herokuapp.com/v1/tasks",{
        method: 'POST',
        headers:{
            'Accept': '*/* , application/json',
            'Content-Type': 'application/json',
            'authorization': `${getToken}`
        },
        body: JSON.stringify({
            "description": `${inputTarefa.value}`,
            "completed": false
        })
    }).then(res => {
        console.log(res.status);
        if (res.status == 201) {
            getTasksAll();
            window.location.href = "http://127.0.0.1:5500/tarefas.html";
        }
    });
};

const delTasks = (params) => {
    let getToken = localStorage.getItem("Token");
    fetch(`https://ctd-todo-api.herokuapp.com/v1/tasks/${params}`,{
        method: 'DELETE',
        headers:{
            'Accept': '*/* , application/json',
            'Content-Type': 'application/json',
            'authorization': `${getToken}`
        }
    }).then(res => {
        console.log(res.status);
        if (res.status == 200) {
            getTasksAll();
            window.location.href = "http://127.0.0.1:5500/tarefas.html";
        }
    });
};

const putTasks = () => {
    let getToken = localStorage.getItem("Token");
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

