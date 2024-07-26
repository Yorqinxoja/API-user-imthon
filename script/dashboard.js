const $addForm=document.querySelector("#addForm");
const $postTitle=document.querySelector("#postTitle");
const $inputImage=document.querySelector("#inputImage");
const $inputTag=document.querySelector("#inputTag");
const $description=document.querySelector("#description");
const $createBtn=document.querySelector("#createBtn");

function Blog(title,image,tags,description) {
    this.title=title,
    this.image=image,
    this.tags=tags
    this.description=description
}

const createNewPost=(e)=>{
    e.preventDefault();
    let newPost = new Blog($postTitle.value,$inputImage.value,$inputTag.value, $description.value)
    console.log(newPost)
    console.log(localStorage.getItem("token"))

    fetch("https://blog-post-production-b61c.up.railway.app/api/v1/blogs",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
            "Authorization" :` Berear ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(newPost)
    })
    .then(response=>response.json())
    .then(data => data)
}

$addForm.addEventListener("submit",createNewPost)