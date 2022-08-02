let createBoton = document.querySelector('.btn_create_post')
let inputTitlePost = document.querySelector('.post_title_input')
let inputTagsPost = document.querySelector('.post_tags_input')
let inputBodyPost = document.querySelector('.post_body_input')
let postToRender = ('https://devto-javascript-default-rtdb.firebaseio.com/.json')
let postsHolder = document.querySelector('.postsHolder')
// Todo Create ajax function to create the post in firebase/post
console.log()


// const insertPost = (post) => {

//     let template = ''
    
//     for (post in postToRender) {
//         template += `
//         <div class="card-body">

//         <div class="d-flex">
//             <div>
//                 <a href="">
//                     <img src="/images/icon_profile.jpg" alt="" class="profile-dimention">
//                 </a>
//             </div>

//             <div class="profile-card">
//                 <span class="name-profile">Lorem ipsum </span>
//                 <span class="date-profile">Lorem ipsum</span>
//             </div>
//         </div>

//         <div class="card-distribution">
//             <h2 class="card-title">
//                 <a href="entry.html" class="title-post">
//                     People rarely use complicated git commands on the weekend, and I have
//                     the
//                     data
//                     to prove
//                     it.

//                 </a>

//             </h2>
//             <div>
//                 <a class="card-text">
//                     <span class="style-cat-js">#</span>javascript
//                 </a>
//                 <a class="card-text-html">
//                     <span class="style-cat-html">#</span>html
//                 </a>
//                 <a class="card-text-react">
//                     <span class="style-cat-react">#</span>react
//                 </a>
//             </div>
            
//             <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->

//             <div class="d-flex justify-content-between icons-general">
//                 <div>
//                     <a href="" class="edition-icon">
//                         <img src="/images/like.png" alt="">
//                         <span class="visibility-title-icon">
//                             reactions
//                         </span>
//                     </a>
//                     <a href="" class="edition-icon">
//                         <img src="/images/comment.png" alt="">
//                         <span class="visibility-title-icon">
//                             comments
//                         </span>

//                     </a>
//                 </div>
//                 <div>
//                     <small class="read-time">16 min read</small>
//                     <button class="btn btn-secondary button-save">Save</button>
//                 </div>
//             </div>

//         </div>


//     </div>
// </div>
// `
//             }
            
//             postsHolder.innerHTML = template
//         }
        
        
        
        
        
        // fetch('https://devto-javascript-default-rtdb.firebaseio.com/.json')
        // .then((post)=>{
            
        //     return post.json()
        // })
        // .then((post)=>{
            
        //     insertPost(post)
        // })
        
        // .catch((error)=>{
        //     console.log(error)
        // })


        
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

      