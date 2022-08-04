let createUpdate = document.querySelector('.btn_update_post')
let inputTitlePost = document.querySelector('.post_title_input')
let inputTagsPost = document.querySelector('.post_tags_input')
let inputBodyPost = document.querySelector('.post_body_input')
let inputUrlImage = document.querySelector('.post_urlImage_input')

let params = new URLSearchParams(window.location.search)
let postId = params.get('postId')

// 

// ${postId}

fetch(`https://devto-javascript-default-rtdb.firebaseio.com/post/-N8WSTZWtEeMq3bMo29R.json`)
.then((res)=>{
    return res.json()
})
.then((res)=>{
    console.log(res)
    // document.addEventListener('DOMContentLoaded', () => {
        inputTitlePost.value = res.title
        quill.root.innerHTML = res.body
        inputTagsPost.value = res.tags
        inputUrlImage.value = res.urlImage
    // })
    
})
.catch((error)=>{
    console.log(error)
})

// https://devto-javascript-default-rtdb.firebaseio.com/post/.json

createUpdate.addEventListener("click", (e)=>{
 e.preventDefault()

 const newPost = {

     

 }

 fetch(`https://devto-javascript-default-rtdb.firebaseio.com/post/${postId}.json`, {
    method:"PATCH",
    body: JSON.stringify(newPost),
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then((res)=>{
    return res.json()
})
.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})


})
