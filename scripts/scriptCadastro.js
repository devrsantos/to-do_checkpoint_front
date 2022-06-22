const inputNome = document.querySelector("#inputNome");
const inputSobrenome = document.querySelector("#inputSobrenome");
const inputEmail = document.querySelector("#inputEmail");
const inputSenha = document.querySelector("#inputSenha");
const inputConfirmaSenha = document.querySelector("#inputConfirmaSenha");
const btnEnviar = document.querySelector("#btnEnviar");
const icon = document.querySelector("#eye");
const check = document.querySelector("#check");
const span = document.querySelector(".text");


// _______________ eye_______________________
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

// _______________ nome e sobrenome________________
const validaString = str => {
    if (str.value.length <= 0) {
        str.classList.remove('success');
        str.classList.add('error');
        return false;
    } else {
        str.classList.remove('error');
        str.classList.add('success');
        return true;
    }
};


// _______________ email________________
const validaEmail = str => {
    let email = str.value;
    
    const re = /\S+@\S+\.\S+/;
    
    if (!re.test(email)) {
        str.classList.remove('success');
        str.classList.add('error');
        return false;
    } else {
        str.classList.remove('error');
        str.classList.add('success');
        str.style.border.color = "green"
        return true;
    }
    
};


// _______________ senha ________________
const validaSenha = str => {
    let senha = str.value;
    if(senha.length==0 || senha === '' || senha.length<=6){
        str.classList.remove('success');
        str.classList.add('error');
        return false;  
    } else {
        str.classList.remove('error');
        str.classList.add('success');
    
        return true; 
    }
    
};


// _______________ confirma senha ________________
const confirmaSenha = (pass1, pass2) => {
    let senha1 = pass1.value;    
    let senha2 = pass2.value;

    if(senha1!=senha2 || senha2==='' ){
        pass2.classList.remove('success');
        pass2.classList.add('error');
        return false;  
    }else if(senha1==senha2){
        pass2.classList.remove('error');
        pass2.classList.add('success');
        return true; 
    }
    
};

const validaCampos = () => {
    validaString(inputNome);
    validaString(inputSobrenome);
    validaEmail(inputEmail);
    validaSenha(inputSenha);
    confirmaSenha(inputSenha, inputConfirmaSenha);
};

// _______________ Botão criar conta ________________

btnEnviar.addEventListener("click", e => {
    validaCampos();
    e.preventDefault();
    if (
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


});


// ________________________________ post usuário_________________________________


function fetchAPI(){
    fetch('https://ctd-todo-api.herokuapp.com/v1/users',{
        method: 'POST',
        headers:{
            'Accept': '*/* , application/json',
            'Content-Type': 'application/json'
        },
         body: JSON.stringify({
            firstName: `${inputNome.value}`,
            lastName: `${inputSobrenome.value}`,
            email: `${inputEmail.value}`,
            password: `${inputSenha.value}`,
         }),
    })
    .then(res => res.json())
    .then(res =>console.log(res))
}