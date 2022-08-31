console.log('Hola');

const loginBtnDOM = document.querySelector(".loginBtn");
const passwordInput = document.querySelector(".passwordInput");
const emailInput = document.querySelector(".emailInput");
const createBtnDOM = document.querySelector(".registerBtn");

let passwordLogin = '';
let  emailLogin  = '';
const postToInsert = {}

const urlBackLogin = 'http://localhost:8080/auth';
const urlBackRegisterUser = 'http://localhost:8080/users'

loginBtnDOM.addEventListener("click",(e)=>{
    passwordLogin = document.querySelector(".passwordInput").value;
    emailLogin = document.querySelector(".emailInput").value;

    if( passwordLogin.length > 0 && emailLogin.length > 0)
    {   
        postToInsert["email"] = emailLogin;
        postToInsert["password"] = passwordLogin;

        fetch(urlBackLogin,{
            method: 'POST',
            body: JSON.stringify(postToInsert),
            headers: {'content-type': 'application/json; charset=UTF-8'}
        })        
        .then((response)=>response.json())
        .then((json)=>{
            console.log(json);
            console.log("state",json.success);
        
            if(!json.success ){
                alert("Correo y/o contraseña incorrectos")
            }else{
                localStorage.setItem("token",json.data.token);
                window.location.href='index.html';
            }
        })
        .catch(err => console.log(err));
    }else{
        alert("Correo y contraseña son obligatorios");
    }
})



createBtnDOM.addEventListener("click",(e)=>{
    console.log("creando usuario")
    passwordLogin = document.querySelector(".passwordInput").value;
    emailLogin = document.querySelector(".emailInput").value;

    if( passwordLogin.length > 0 && emailLogin.length > 0)
    {   
        postToInsert["email"] = emailLogin;
        postToInsert["password"] = passwordLogin;

        fetch(urlBackRegisterUser,{
            method: 'POST',
            body: JSON.stringify(postToInsert),
            headers: {'content-type': 'application/json; charset=UTF-8'}
        })        
        .then((response)=>response.json())
        .then((json)=>{
            if(json.success){
                alert("USUARIO CREADO.... DEBES DE INICIAR SESIÓN")
            }
        })
        .catch(err => console.log(err));
    }else{
        alert("Correo y contraseña son obligatorios");
    }
})
