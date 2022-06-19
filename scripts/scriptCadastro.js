const inputNome = document.querySelector("#inputNome");
const inputSobrenome = document.querySelector("#inputSobrenome");
const inputEmail = document.querySelector("#inputEmail");
const inputSenha = document.querySelector("#inputSenha");
const inputConfirmaSenha = document.querySelector("#inputConfirmaSenha");

const btnEnviar = document.querySelector("#btnEnviar");

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
        return true;
    }
    
};

const validaSenha = str => {
    let senha = str.value;
};

const confirmaSenha = (pass1, pass2) => {
    let senha1 = pass1.value;    
    let senha2 = pass2.value;
};

btnEnviar.addEventListener("click", e => {
    
    if (
        !validaString(inputNome) &&
        !validaString(inputSobrenome) &&
        !validaEmail(inputEmail) &&
        !validaSenha(inputSenha) &&
        !confirmaSenha(inputSenha, inputConfirmaSenha)
    ) {
        e.preventDefault();
        console.log(`{Error: Aguardando a validação dos campos}`);
    } else {
        console.log(`{Success: Campos verificados com Sucesso}`);
    }

});