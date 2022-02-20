let postsArr=[];

function renderPosts(){

    let divContent= "";
    for(let i=0; i<postsArr.length; i++){
        divContent+=`
        <h2>${postsArr[i].title}</h2>
        <p>${postsArr[i].body}</p>
        <hr>
        `
    }
    document.querySelector('div').innerHTML =divContent;
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>{
        postsArr=data.slice(0,5)
        renderPosts()
    })


const form=document.getElementById('add-post-form')
const titleInput=document.getElementById('post-title')
const bodyInput=document.getElementById('post-body')

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const title=titleInput.value
    const body=bodyInput.value

    const post={
        title: title,
        body: body,
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
       method: "POST",
       body : JSON.stringify(post),
        headers : {
            "Content-Type" : "application/json"
        }

    })
        .then(res=>res.json())
        .then(data=>{
            postsArr.unshift(data)
            renderPosts()
        })
    
        form.reset()
})

