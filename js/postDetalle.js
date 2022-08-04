/*let params = new URLSearchParams(window.location.search)
let postId = params.get('postId')*/

let queryURL = window.location.search 
let postId = queryURL.substring(8)

const mainContainer = document.querySelector('#main-container');


/// URL FOR DATA BASE
const firebaseUrlPost = `https://devto-javascript-default-rtdb.firebaseio.com/post/-${postId}.json`;

// Reading from data base
const getData = (url) => {
    const httRequest = new XMLHttpRequest()

    let result;
    httRequest.onload = (data) => {
        result = JSON.parse(data.target.responseText)
    }

    httRequest.open("GET", url, false)

    httRequest.send()

    return result
}

// POST -> YA EN OJBETO LITERAL
post_ = getData(firebaseUrlPost);
post_.imageSrc = 'https://res.cloudinary.com/practicaldev/image/fetch/s--q9tO7oKk--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7qbdvoa9yrkvdj7fbuxf.png'
post_.autor = 'Filomeno Pérez'


console.log(post_)

postObj = {
    body: 'hola hola hola hola',
    tags: 'javascript',
    title: 'test post',
    date: 'August 2',
    reactions: 0,
    noComments: 0,
    time2Read: '4 min',
    autor: '',
    imageSrc: '',
}



let htmlString = `
<div class="image-graph">
          <img src="${post_.imageSrc}" class="card-img-top  cardImgTop img-fluid" alt="...">
        </div>
        <div class="d-flex align-items-center">
        <a id="edit-post" href="./editPost.html?postId${post_.id}""> 
            <button type="button" class="btn btn-outline-warning">Edit Post</button>
        </a>    

        <a id="delete-post" href="./index.html">    
            <button type="button" class="btn btn-outline-danger">Delete Post</button>
        </a>
    </div>
        <div class="autor d-flex mt-5">
          <div>
            <img src="images/b5d7d157-a9a4-420e-b0ba-beaa4e843d7e.webp" class="avatar_entry_2nd">
          </div>
          <div class="mx-4 autorProperties">
            <p>
              <span class="fw-bold">${post_.autor}</span> <span class="text-secondary">for</span> The DEV Team
            </p>
            <p class="text-mini">
              ${post_.date}
            </p>
          </div>
        </div>
        <h1>${post_.title}</h1>

        <p><span>#</span>${post_.tags}</p>

        ${post_.body}
` 

mainContainer.innerHTML = htmlString;





const editPostElment = document.querySelector('#edit-post');
const deletePostElelement = document.querySelector('#delete-post')

deletePostElelement.addEventListener('click',(event)=>{
    deletePost(firebaseUrlPost);

  
});



function deletePost(url) {
    console.log('Dentro de DELETE POST')
    fetch(url, {
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
    }

    deletePostElelement.addEventListener("click", ()=>{

     deletePost(firebaseUrlPost);

    })

