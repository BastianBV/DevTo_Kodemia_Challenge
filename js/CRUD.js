document.addEventListener('DOMContentLoaded', ()=>{
    inputTitlePost.value = ''
    inputBodyPost.value = ''
    inputTagsPost.value = ''
    inputUrlImage.value = ''
})




let  alertHolder = document.querySelector('.alertHolder')
let createBoton = document.querySelector('.btn_create_post')
let inputUrlImage = document.querySelector('.post_urlImage_input')
let inputTitlePost = document.querySelector('.post_title_input')
let inputTagsPost = document.querySelector('.post_tags_input')
let inputBodyPost = document.querySelector('.post_body_input')
let postToRender = ('https://devto-javascript-default-rtdb.firebaseio.com/.json')
let postsHolder = document.querySelector('.postsHolder')

console.log(inputUrlImage.value)
        
        
        createBoton.addEventListener('click', (e) => {

            e.preventDefault()
            let urlImage = inputUrlImage.value
               let title = inputTitlePost.value
               let tags = inputTagsPost.value
               let body = quill.root.innerHTML //! Quill

            if (
                urlImage === '' ||
                title === '' ||
                body === '' ||
                 tags === ''
            )
               {
                alertHolder.innerHTML =  `
                <div class="alert alert-danger mt-4" role="alert">
                Algunos de los campos estan vacios
                </div>
                `
        
                setTimeout(()=>{
                    alertHolder.innerHTML = ''
                }, 5000)
            } 
            else {
                const postToInsert = {
                    urlImage: urlImage,
                    title: title,
                    body: body,
                    tags: tags,
                    reactions: Math.floor(Math.random()*50),
                    comments: Math.floor(Math.random()*10),
                    author: 'Someone',
                    date: new Date()

                }
                
                fetch('http://localhost:8080/post',{
                    method: 'POST',
                    body: JSON.stringify(postToInsert),
                    headers: {'content-type': 'application/json; charset=UTF-8'}
                })        
                .then((res)=>{
                    return res.json
                })
                .then((res)=>{
                    if (res)    {
                        alertHolder.innerHTML =  `
                        <div class="alert alert-success mt-4" role="alert">
                        Post creado con exito! 
                        </div>
                        `
                
                        setTimeout(()=>{
                            alertHolder.innerHTML =''
                        }, 1500)
                        
                    }
                    
                    setTimeout(()=>{
                        window.location.href = '/' 
                    }, 1600)
    
                    console.log(res)
                  })
                  .catch((error)=>{
                    console.log(error)
                  })
                }
            })
         


        
      