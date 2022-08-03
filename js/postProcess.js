//// DOM OBJECTS 
const postContainer = document.querySelector('#home-tab-pane');
const bloque = document.querySelector('#profile-tab-pane'); 


/// URL FOR DATA BASE
const firebaseUrl = 'https://devto-javascript-default-rtdb.firebaseio.com/post/.json';


// Object definition
postObj = {
    body: 'hola hola hola hola',
    tags: 'javascript',
    title: 'test post',
    date: 'August 2',
    reactions: 0,
    noComments: 0,
    time2Read: '4 min',
}

// URL FOR DATABASE



// 
const renderPost = (postObj) => {
    const bloque = document.querySelector('#profile-tab-pane'); 
    const divPost = document.createElement('div');
    divPost.innerHTML = `
            <div class="card  mb-3">
                <div class="card-body">
                    <div class="d-flex">
                        <div>
                            <a href="">
                                <img src="./images/icon_profile.jpg" alt="" class="profile-dimention">
                            </a>
                        </div>

                        <div class="profile-card">
                            <span class="name-profile">${postObj.author} </span>
                            <span class="date-profile">${postObj.date} DAY</span>
                        </div>

                    </div>
                    <div class="card-distribution">
                        <h2 class="card-title">
                            <a href="" class="title-post-secondary">
                                ${postObj.title}
                            </a>
                        </h2>
                        <a class="card-text">
                            <span class="style-cat-git">#</span>${postObj.tags}
                        </a>

                        <div class="d-flex justify-content-between icons-general">
                            <div>
                                <a href="" class="edition-icon">
                                    <img src="./images/like.png" alt="">
                                    <span class="visibility-title-icon">
                                        ${postObj.reactions} reactions
                                    </span>
                                </a>
                                <a href="" class="edition-icon">
                                    <img src="/images/comment.png" alt="">
                                    <span class="visibility-title-icon">
                                        ${postObj.noComments} comments
                                    </span>

                                </a>
                            </div>
                            <div>
                                <small class="read-time">${postObj.time2Read}</small>
                                <button class="btn btn-secondary button-save">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

    postContainer.insertBefore(divPost,bloque);
}   



// Reading from data base
const getData = (url) => {
    const httRequest = new XMLHttpRequest()

    let result = []
    httRequest.onload = (data) => {
        result = JSON.parse(data.target.responseText)
    }

    httRequest.open("GET", url, false)

    httRequest.send()

    return result
}



let queryURL = window.location.search
let postId = queryURL.substring(8)
// let params = new URLSearchParams(window.location.search)
// let postId = params.get('postId')
let urlDataBase = 'https://devto-javascript-default-rtdb.firebaseio.com/post/.json'

let postToRender = getData(urlDataBase);

console.log(postToRender);

//creando lista de Posts
const postOnDataBase = []
for (let i in postToRender){
    postObj = {
        body: postToRender[i].body,
        tags: postToRender[i].tags,
        title: postToRender[i].title,
        date: 'August 2',
        reactions: 0,
        noComments: 0,
        time2Read: '4 min',
        id: i,
        url_image: ''
    }
    postOnDataBase.push(postObj);
}

console.log(postOnDataBase)