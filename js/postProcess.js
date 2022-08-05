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
        date: parsingDate(postToRenderRaw[i].date),
        reactions: postToRenderRaw[i].reactions,
        noComments: 0,
        time2Read: time2Read(postToRenderRaw[i].body),
        id: i,
        urlImage: postToRenderRaw[i].urlImage,
    }
    postOnDataBaseObjArray.push(postObj);
    
}

parsingDate("2022-08-04T22:30:11.265Z")
//postOnDataBase.forEach(console.log);
post4Render = [...postOnDataBaseObjArray];
//console.log(post4Render);


const renderAllPost=()=>{
    postContainer.innerHTML='';
    renderPostPrimario(post4Render.shift());

    if(post4Render.length!==0){
        post4Render.forEach(renderPostSecundario);
    }

};

renderAllPost(post4Render);

//console.log(postOnDataBaseObjArray);
//console.log(post4Render)


////////// FILTERING THE POSTS  
let string2search = '';

searchInput.addEventListener('keyup',(event)=>{
 
    string2search = event.target.value;
    //(string2search);
    if(event.key === 'Enter' && string2search!==''){
        //console.log('Time to filter posts');
        filterPosts(string2search);
    }else if(post4Render.length !== postOnDataBaseObjArray.length-1 ){
        post4Render=[...postOnDataBaseObjArray];
        renderAllPost();
    }
})


searchBtn.addEventListener('click',(event)=>{
    if(string2search!==''){
        //console.log('Time to filter posts');
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
            //console.log('filtering...')
            //console.log(postObj);
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
                //console.log(`DENTRO DEL IF GENERAL`);
                //console.log(`Se puede PUSHEAR el objeto`);
                return postObj;
            }
        });
    }
    //console.log(post4Render);
    renderAllPost();
}




//RENDER POST PRINCIPAL
function renderPostPrimario(postObj){

    const divPost = document.createElement('div');
    divPost.innerHTML = `
    <div id="${postObj.id}" class="card mb-3">
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
                    <span class="date-profile">${postObj.date}</span>
                </div>
            </div>

            <div class="card-distribution clicked">
                <h2 class="card-title">
                <a href="entry.html?postId${postObj.id}" class="title-post">
                        ${postObj.title}

                    </a>
                    <div class="piktowrapper-embed" data-uid="21a3bfad2ec6-recruitment-dashboard"></div><script>(function(d){var js, id="pikto-embed-js", ref=d.getElementsByTagName("script")[0];if (d.getElementById(id)) { return;}js=d.createElement("script"); js.id=id; js.async=true;js.src="https://create.piktochart.com/assets/embedding/embed.js";ref.parentNode.insertBefore(js, ref);}(document));</script>


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
                            <img src="./images/like.png" alt="">${postObj.reactions}
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
            <div id="${postObj.id}" class="card  mb-3">
                <div class="card-body">
                    <div class="d-flex">
                        <div>
                            <a href="">
                                <img src="./images/icon_profile.jpg" alt="" class="profile-dimention">
                            </a>
                        </div>

                        <div class="profile-card">
                            <span class="name-profile">${postObj.author} </span>
                            <span class="date-profile">${postObj.date} </span>
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


function parsingDate(dateStr){

    postDate_01 = new Date(dateStr);

    let milisecondsInitial = Date.parse("2022-08-04T22:30:11.265Z");
    let currentDate = new Date(dateStr);
    let milisecondsCurrent = Date.now();
    let deltaTimeMS = milisecondsCurrent - milisecondsInitial;
    let deltaTimeS = 0.001*(deltaTimeMS);
    let deltaMinutos = deltaTimeS/60;
    let deltaHoras = deltaMinutos/60;
    let deltaDias = deltaHoras/24;

    let monthPost = '';

    switch(currentDate.getMonth()){
        case 1:
            monthPost = 'Jan';
            break;
        case 2:
            monthPost = 'Feb';
            break;
        case 3:
            monthPost = 'Mar';
            break;
        case 4:
            monthPost = 'Apr';
            break;
        case 5:
            monthPost = 'May';
            break;
        case 6:
            monthPost = 'Jun';
            break;
        case 7:
            monthPost = 'Jul';
            break;
        case 8:
            monthPost = 'Aug';
            break;
        case 9:
            monthPost = 'Sep';
            break;
        case 10:
            monthPost = 'Oct';
            break;
        case 11:
            monthPost = 'Nov';
            break;
        case 12:
            monthPost = 'Dec';
            break;
    }

    let strDeltaTime = '';

    if (deltaMinutos < 0){
        strDeltaTime = '( 0 minutos ago)';
    }
    else if(deltaMinutos < 60){
        strDeltaTime = `( ${Math.floor(deltaMinutos)} mins ago )`;
    }
    else if(deltaMinutos > 60 && deltaHoras < 24){
        strDeltaTime = `( ${Math.floor(deltaHoras)} hours ago )`;
    }
    else{
        strDeltaTime = `( ${Math.floor(deltaDias)} days ago ) `;
    }


 
     
    postDate = new Date()

    let strDate = `${monthPost} ${currentDate.getDay()} ${strDeltaTime} `;
    
    return strDate;    
}


function time2Read(str2Count){
    console.log(str2Count);
    noWords = str2Count.split(" ").length;
    return `${Math.floor(noWords / 200)} minutes`;
}