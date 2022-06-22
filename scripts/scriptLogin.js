const inputEmail = document.querySelector("#inputEmail");
const inputSenha = document.querySelector("#inputSenha");
const btnEnviar = document.querySelector("#btnEnviar");
const inputEmail = document.querySelector("#inputEmail");
const inputSenha = document.querySelector("#inputPassword");
const icon = document.querySelector("#eye");

// _______________ eye_______________________
/*icon.addEventListener("click", e =>{

    if(icon.className=="fa-solid fa-eye-slash"){
    icon.classList.remove("fa-eye-slash")
    icon.classList.add("fa-eye");
    inputSenha.type="text";
    inputConfirmaSenha.type="text";
    } else {
    icon.classList.add("fa-eye-slash")
    icon.classList.remove("fa-eye");
    inputSenha.type="password";
    inputConfirmaSenha.type="password";
    }
 });
*/
// ________________________________ post usuário/login_________________________________
function fetchAPI(){
    fetch('https://ctd-todo-api.herokuapp.com/v1/users',{
        method: 'GET',
        headers:{
            'Accept': '*/* , application/json, text/plain',
            'Content-Type': 'application/json'
        },
         body: JSON.stringify({
            email: `${inputEmail.value}`,
            password: `${inputSenha.value}`,
         }),
    })
    .then(res => res.json())
    .then(res =>console.log(res))
}

 // _______________ Botão criar conta ________________

btnEnviar.addEventListener("click", e => {
    e.preventDefault();

   /* if (
        !validaString(inputNome) &&
        !validaString(inputSobrenome) &&
        !validaEmail(inputEmail) &&
        !validaSenha(inputSenha) &&
        !confirmaSenha(inputSenha, inputConfirmaSenha)
    ) {
        console.log(`{Error: Aguardando a validação dos campos}`);
        check.classList.remove("fa-check");
        check.classList.add("fa-x");
    } else {
        console.log(`{Success: Campos verificados com Sucesso}`);
        check.classList.remove("fa-x");
        check.classList.add("fa-check");
        fetchAPI();
        
        // Aqui será adicionado o redicionamento para a página de tarefa
    }
    */
});