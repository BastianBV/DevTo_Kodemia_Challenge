

//let createUpdate = document.querySelector('.btn_update_post')
const inputTitlePost = document.querySelector('.post_title_input')
const inputTagsPost  = document.querySelector('.post_tags_input')
const inputBodyPost  = document.querySelector('.post_body_input')
const inputUrlImage  = document.querySelector('.post_urlImage_input')
const updateBtn      = document.querySelector('#updateBtn');
const deleteBtn      = document.querySelector('#deleteBtn'); 

let queryURL = window.location.search 
let postId = `${queryURL.substring(8)}`

console.log(postId)

/// URL FOR DATA BASE
const firebaseUrlPost = `http://localhost:8080/post/${postId}`;
console.log(firebaseUrlPost)

// Reading from data base
const getData = (url) => {
    const httRequest = new XMLHttpRequest()

    let result;
    httRequest.onload = (data) => {
        result = JSON.parse(data.target.responseText)
        console.log(result);
    }

    httRequest.open("GET", url, false)

    httRequest.send()

    return result
}

// POST -> YA EN OJBETO LITERAL
post_ = getData(firebaseUrlPost);


document.addEventListener('DOMContentLoaded',()=>{
    inputTitlePost.value = post_.post.title
    quill.root.innerHTML = post_.post.body
    inputTagsPost.value  = post_.post.tags
    inputUrlImage.value  = post_.post.urlImage

})

updateBtn.addEventListener('click',(event)=>{
    post_.post.title    = inputTitlePost.value;
    post_.post.body     = quill.root.innerHTML;
    post_.post.tags     = inputTagsPost.value;
    post_.post.urlImage = inputUrlImage.value;
    console.log(post_);

    const postToUpdate = {
        urlImage: post_.post.urlImage,
        title: post_.post.title,
        body: post_.post.body,
        tags: post_.post.tags
    }

    fetch(firebaseUrlPost, {
        method:"PATCH",
        body: JSON.stringify(postToUpdate),
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
    });

    window.location.href = `./index.html`


});
    
deleteBtn.addEventListener('click',(event)=>{
    console.log('Dentro de DELETE POST');
    
    fetch(firebaseUrlPost, {
        method:"DELETE",
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
    console.log('deletion complete');

    window.location.href = `./index.html`
    

});

/*
function deletePost(url) {
    

    deletePostElelement.addEventListener("click", ()=>{

     deletePost(firebaseUrlPost);

    })
    
*/




/*

fetch(firebaseUrlPost)
.then((res)=>{
    return res.json()
})
.then((res)=>{
    console.log(res)
    // document.addEventListener('DOMContentLoaded', () => {
        //inputTitlePost.value = res.title
        //quill.root.innerHTML = res.body
        //inputTagsPost.value = res.tags
        //inputUrlImage.value = res.urlImage
    // })
    
})
.catch((error)=>{
    console.log(error)
})

// https://devto-javascript-default-rtdb.firebaseio.com/post/.json
/*
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
*/
