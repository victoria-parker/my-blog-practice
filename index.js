fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>{
        data=data.slice(0,5)
        for(let i=0; i<data.length; i++){
            document.querySelector("div").innerHTML+=`
            <h2>${data[i].title}</h2>
            <p>${data[i].body}</p>
            <hr>
            `
        }
        console.log(data)})