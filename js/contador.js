let checkboxhiders = document.querySelectorAll('.aside-icon-container')

let checkboxcontainer =   document.querySelector('#aside-icon-checkboxheart')
    checkboxcontainer.onclick = function(){
        
        let asidecount = document.querySelector('#asidecount')
        let checkboxhider = checkboxcontainer.checked
        if(
            checkboxhider == true 
        ){
            post_.reactions = post_.reactions +1;
        }else{
            post_.reactions = post_.reactions -1;
           
        }
        asidecount.textContent =  post_.reactions;
        console.log(checkboxhider)
    }








// checkboxhider.addEventListener('click', ()=>{

//     // let likes;
//     if(checkboxhider){
//         asidecount = asidecount + 1
//     } else {
//         asidecount = asidecount - 1
//     }
//     return asidecount; 
// })
// console.log(checkboxhider)