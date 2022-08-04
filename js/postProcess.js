//// DOM OBJECTS 
const postContainer = document.querySelector('#home-tab-pane');
const searchInput = document.querySelector('#search-bar');
const searchBtn = document.querySelector('#basic-addon1');

/// URL FOR DATA BASE
const firebaseUrl = 'https://devto-javascript-default-rtdb.firebaseio.com/post/.json';

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

// Array with all the posts on the data base 
let postToRenderRaw = getData(firebaseUrl);


//creando lista de Posts
const postOnDataBaseObjArray = [];       
let post4Render = [];
for (let i in postToRenderRaw){
    postObj = {
        body: postToRenderRaw[i].body,
        tags: postToRenderRaw[i].tags,
        title: postToRenderRaw[i].title,
        date: 'August 2',
        reactions: 0,
        noComments: 0,
        time2Read: '4 min',
        id: i,
        urlImage: postToRenderRaw[i].urlImage,
    }
    postOnDataBaseObjArray.push(postObj);
}
//postOnDataBase.forEach(console.log);
post4Render = [...postOnDataBaseObjArray];
console.log(post4Render);


const renderAllPost=()=>{
    postContainer.innerHTML='';
    renderPostPrimario(post4Render.shift());

    if(post4Render.length!==0){
        post4Render.forEach(renderPostSecundario);
    }

};

renderAllPost(post4Render);

console.log(postOnDataBaseObjArray);
console.log(post4Render)


////////// FILTERING THE POSTS  
let string2search = '';

searchInput.addEventListener('keyup',(event)=>{
 
    string2search = event.target.value;
    console.log(string2search);
    if(event.key === 'Enter' && string2search!==''){
        console.log('Time to filter posts');
        filterPosts(string2search);
    }else if(post4Render.length !== postOnDataBaseObjArray.length-1 ){
        post4Render=[...postOnDataBaseObjArray];
        renderAllPost();
    }
})


searchBtn.addEventListener('click',(event)=>{
    if(string2search!==''){
        console.log('Time to filter posts');
        filterPosts(string2search);
    }else if(post4Render.length !== postOnDataBaseObjArray.length-1 ){
        post4Render=[...postOnDataBaseObjArray];
        renderAllPost();
    }
     
});

function filterPosts(string2search){
    post4Render = [];
    if(postOnDataBaseObjArray.length != 0){
        
        post4Render = postOnDataBaseObjArray.filter((postObj)=>{
            console.log('filtering...')
            console.log(postObj);
            /*let coincidenceOnBody = postObj.body.match(string2search);
            console.log(`body coincidence: ${coincidenceOnBody}`);
            if(coincidenceOnBody!==null){
                console.log('PUSH EL OBJETO')
            }

            let coincidenceOnTitle = postObj.title.match(string2search);
            console.log(`body coincidence: ${coincidenceOnTitle}`);
            if(coincidenceOnTitle!==null){
                console.log('PUSH EL OBJETO')
            }

            let coincidenceOnTags = postObj.tags.match(string2search);
            console.log(`body coincidence: ${coincidenceOnTags}`);
            if(coincidenceOnTags!==null){
                console.log('PUSH EL OBJETO')
            }*/

            if((postObj.body.match(string2search)!==null)||
               (postObj.title.match(string2search)!==null)||
               (postObj.tags.match(string2search)!==null)){
                console.log(`DENTRO DEL IF GENERAL`);
                console.log(`Se puede PUSHEAR el objeto`);
                return postObj;
            }
        });
    }
    console.log(post4Render);
    renderAllPost();
}




//RENDER POST PRINCIPAL
function renderPostPrimario(postObj){

    const divPost = document.createElement('div');
    divPost.innerHTML = `
    <div class="card mb-3">
        <img src="${postObj.urlImage}" class="card-img-top" alt="...">

        <div class="card-body">

            <div class="d-flex">
                <div>
                    <a href="">
                        <img src="./images/icon_profile.jpg" alt="" class="profile-dimention">
                    </a>
                </div>

                <div class="profile-card">
                    <span class="name-profile">${postObj.autor} </span>
                    <span class="date-profile">${postObj.date}Lorem ipsum</span>
                </div>
            </div>

            <div class="card-distribution">
                <h2 class="card-title">
                <a href="entry.html?postId${postObj.id}" class="title-post">
                        ${postObj.title}

                    </a>

                </h2>
                <div>
                    <a class="card-text">
                        <span class="style-cat-js">#</span>${postObj.tags}
                    </a>
                    <a class="card-text-html">
                        <span class="style-cat-html">#</span>html
                    </a>
                    <a class="card-text-react">
                        <span class="style-cat-react">#</span>react
                    </a>
                </div>


                <div class="d-flex justify-content-between icons-general">
                    <div>
                        <a href="" class="edition-icon">
                            <img src="./images/like.png" alt="">
                            <span class="visibility-title-icon">
                                reactions
                            </span>
                        </a>
                        <a href="" class="edition-icon">
                            <img src="./images/comment.png" alt="">
                            <span class="visibility-title-icon">
                                comments
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
    </div>
            
            `

    postContainer.append(divPost); 

}


// RENDER POST SECUDNARIOS
function renderPostSecundario(postObj){
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
                            <a href="entry.html?postId${postObj.id}" class="title-post-secondary">
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
            </div>
            `

    postContainer.append(divPost); 
}   
