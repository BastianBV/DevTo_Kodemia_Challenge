console.log("hola");

const LogInBtn =  document.querySelector(".LogInBtn");
const CreatePostBtn =  document.querySelector(".CreatePostBtn");

let keysInLocal = window.localStorage
console.log(keysInLocal)

console.log(keysInLocal)

if(keysInLocal.token){//token exists
    console.log('hay token')
    LogInBtn.classList.add('d-none');
    CreatePostBtn.classList.remove('d-none');
}
else{
    console.log('no hay token');
    LogInBtn.classList.remove('d-none');
    CreatePostBtn.classList.add('d-none');
}