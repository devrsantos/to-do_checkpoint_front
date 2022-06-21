const inputEmail = document.querySelector("#inputEmail");
const inputSenha = document.querySelector("#inputPassword");
const icon = document.querySelector("#eye");

icon.addEventListener("click", e =>{

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
     
 
 })