/* Script apenas para verificar se existe o Token */

let getToken = localStorage.getItem("Token");

if (getToken == undefined || getToken == "undefined") {
    window.location.href = "http://127.0.0.1:5500/index.html";
}