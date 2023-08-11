// import most of this from launch.js make SINGLUAR 

const deleteBtn = document.querySelector('.delete-btn');
const submitComment = document.querySelector('input[type="submit"]')



// get postId
let url = window.location.href;
let urlSplit = url.split('/');
let postIdUrl = urlSplit[4];


// successful
deleteBtn.addEventListener('click', (event) => {
    console.log('clicked')
    let postId = event.currentTarget.parentElement.parentElement.id; 
    console.log(postId)
    fetch(`/api/blogPost/${postId}`, {
        method: 'DELETE',
        headers: {'Content-type': 'application/json'},
    })
    // send route again to render homepage
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

    })
    .catch ((err) => {
        console.error(err)})
})

submitComment.addEventListener('click', (event) => {
    event.preventDefault();

    let commentText = document.querySelector('#commentText').value;

    let commentData = {
        // update user/post based on info passed
        user_id: 15,
        post_id: postIdUrl,
        text: commentText
    }

    fetch('/api/comment', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(commentData)
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
})