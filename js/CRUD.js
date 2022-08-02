let createBoton = document.querySelector('.btn_create_post')
let inputTitlePost = document.querySelector('.post_title_input')
let inputTagsPost = document.querySelector('.post_tags_input')
let inputBodyPost = document.querySelector('.post_body_input')
let postToRender = ('https://devto-javascript-default-rtdb.firebaseio.com/.json')
let postsHolder = document.querySelector('.postsHolder')
// Todo Create ajax function to create the post in firebase/post
console.log()

        
        createBoton.addEventListener('click', (e) => {

            e.preventDefault()
            const title = {
                title:inputTitlePost.value,
                tags:inputTagsPost.value,
                body:inputBodyPost.value
            }
            console.log(title);

            fetch('https://devto-javascript-default-rtdb.firebaseio.com/.json',{
                method: 'POST',
                body: JSON.stringify(title),
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
        })

        
      