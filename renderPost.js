console.log('hola');

const postContainer = document.querySelector('#home-tab-pane');
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
                <span class="name-profile">PALMEROS </span>
                <span class="date-profile">PALMEROS DAY</span>
            </div>

        </div>
        <div class="card-distribution">
            <h2 class="card-title">
                <a href="" class="title-post-secondary">
                    CodeLand is special, and I'm not just saying that. PALMEROS
                </a>
            </h2>
            <a class="card-text">
                <span class="style-cat-git">#</span>javascript
            </a>

            <div class="d-flex justify-content-between icons-general">
                <div>
                    <a href="" class="edition-icon">
                        <img src="./images/like.png" alt="">
                        <span class="visibility-title-icon">
                            reactions
                        </span>
                    </a>
                    <a href="" class="edition-icon">
                        <img src="/images/comment.png" alt="">
                        <span class="visibility-title-icon">
                            comments
                        </span>

                    </a>
                </div>
                <div>
                    <small class="read-time">16 min read</small>
                    <button class="btn btn-secondary button-save">Save PALMER</button>
                </div>
            </div>
        </div>
    </div>
</div>`;

postContainer.insertBefore(divPost,bloque);


//const renderPost(()=>{ });
