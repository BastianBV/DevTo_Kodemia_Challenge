let checkboxhiders = document.querySelectorAll('.aside-icon-container')

let checkboxcontainer =   document.querySelector('#aside-icon-checkboxheart')
    checkboxcontainer.onclick = async function(){
        
        let asidecount = document.querySelector('#asidecount')
        let checkboxhider = checkboxcontainer.checked
        if(
            checkboxhider == true 
        ){
            // post_.reactions = post_.reactions +1;
            const plainRes = await fetch(`http://localhost:8080/post/${post_.post._id}/likes`, {method:"PATCH"} )
            const res = await plainRes.json()
            post_.post.reactions = res.data.updateLikes.reactions
            console.log(post_.post._id)
        }else{
            const rest = await fetch (``)
           
        }
        asidecount.textContent =  post_.post.reactions.likes;
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