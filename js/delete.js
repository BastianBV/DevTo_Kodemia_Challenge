



const deletePost = (url) => {
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

    document.querySelector(".btn_delete_post").addEventListener("click", ()=>{

     deletePost(url)

     window.location.href = '/createPost.html'
    })