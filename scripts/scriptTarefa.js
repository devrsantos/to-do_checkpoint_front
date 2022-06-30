const inputTarefa = document.querySelector("#inputTarefa");
const btnCriar = document.querySelector("#btnCriar");
const btnSair = document.querySelector("#closeApp");
let tarefasPendentes = document.querySelector("#tarefasPendentes");
let time = new Date().toLocaleString();
let getNome = localStorage.getItem("Nome");
document.querySelector("#nome").value = getNome;

let trash;
let pen;
let check;

// ____________________ Criação de Tarefa ____________________
btnCriar.addEventListener("click", e => {
    e.preventDefault();
    postTasks();
});

btnSair.addEventListener("click", e =>{
    localStorage.removeItem("Token");
    window.location.href = "https://devrsantos.github.io/to-do_checkpoint_front/index.html";
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
        <i class="fa-regular fa-pen-to-square" id="editar"></i>
    </li>`;
};

// __________________ codigos API ____________________
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
                pen = document.querySelectorAll("#editar");
                pen.forEach((ele, i) => {
                    ele.addEventListener("click", () => {
                        putTasks(data[i].id);
                    });
                });
                check = document.querySelectorAll("#btnFeito");
                let nome = document.querySelectorAll(".nome");
                check.forEach((ele) => {
                    ele.addEventListener("click", () => {  
                        nome.forEach((ju)=>{
                            ju.classList.toggle("feito"); 
                         }) 
                       
                    });
                });

            });
        }
    });
};

getTasksAll();

const getTasksOne = () => {
    let getToken = JSON.parse(localStorage.getItem("Token"));
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
    let getToken = JSON.parse(localStorage.getItem("Token"));
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
            window.location.href = "https://devrsantos.github.io/to-do_checkpoint_front/tarefas.html";
        }
    });
};

const delTasks = (params) => {
    let getToken = JSON.parse(localStorage.getItem("Token"));
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
            window.location.href = "https://devrsantos.github.io/to-do_checkpoint_front/tarefas.html";
        }
    });
};

const putTasks = params => {
    let getToken = JSON.parse(localStorage.getItem("Token"));
    fetch(`https://ctd-todo-api.herokuapp.com/v1/tasks/${params}`,{
        method: 'PUT',
        headers:{
            'Accept': '*/* , application/json',
            'Content-Type': 'application/json',
            'authorization': `${getToken}`
        },
        body: JSON.stringify({
            "description":`${inputTarefa.value}` ,
            "completed": false
        })
    }).then(res => {
        if (res.status == 200) {
            getTasksAll();
            window.location.href = "https://devrsantos.github.io/to-do_checkpoint_front/tarefas.html";
        }
    });
};

