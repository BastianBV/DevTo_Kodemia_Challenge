document.addEventListener('DOMContentLoaded', ()=>{
    inputTitlePost.value = ''
    inputBodyPost.value = ''
    inputTagsPost.value = ''
})






let createBoton = document.querySelector('.btn_create_post')
let inputTitlePost = document.querySelector('.post_title_input')
let inputTagsPost = document.querySelector('.post_tags_input')
let inputBodyPost = document.querySelector('.post_body_input')
let postToRender = ('https://devto-javascript-default-rtdb.firebaseio.com/.json')
let postsHolder = document.querySelector('.postsHolder')

        
        
        createBoton.addEventListener('click', (e) => {

            e.preventDefault()
           
               let title= inputTitlePost.value
               let tags= inputTagsPost.value
               let body= quill.root.innerHTML //! Quill

            if (
                title === '' ||
                body === '' ||
                 tags === ''
            )
               {
            //     alertHolder.innerHTML =  `
            //     <div class="alert alert-danger mt-4" role="alert">
            //     Algunos de los campos estan vacios
            //     </div>
            //     `
        
            //     setTimeout(()=>{
            //         alertHolder.innerHTML = ''
            //     }, 2000)
            } 
            else {
                const postToInsert = {
                    title: title,
                    body: body,
                    tags: tags
                }
                
                fetch('https://devto-javascript-default-rtdb.firebaseio.com/post/.json',{
                    method: 'POST',
                    body: JSON.stringify(postToInsert),
                    headers: {'content-type': 'application/json; charset=UTF-8'}
                })        
                .then((res)=>{
                    return res.json
                })
                .then((res)=>{
                    console.log(res)
                  })
                  .catch((error)=>{
                    console.log(error)
                  })
                }
            })
         


        
      