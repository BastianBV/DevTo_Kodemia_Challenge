console.log('Hola');

const loginBtnDOM = document.querySelector(".loginBtn");
const passwordInput = document.querySelector(".passwordInput");
const emailInput = document.querySelector(".emailInput");

let passwordLogin = '';
let  emailLogin  = '';
const postToInsert = {}

const urlBack = 'http://localhost:8080/auth'


loginBtnDOM.addEventListener("click",(e)=>{
    passwordLogin = document.querySelector(".passwordInput").value;
    emailLogin = document.querySelector(".emailInput").value;

    if( passwordLogin.length > 0 && emailLogin.length > 0)
    {   
        postToInsert["email"] = emailLogin;
        postToInsert["password"] = passwordLogin;

        fetch(urlBack,{
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


