// import most of this from launch.js make SINGLUAR 

const submitComment = document.querySelector('input[type="submit"]')



// get postId
let url = window.location.href;
let urlSplit = url.split('/');
let postIdUrl = urlSplit[4];
console.log(postIdUrl)

submitComment.addEventListener('click', (event) => {
    event.preventDefault();

    let commentText = document.querySelector('#commentText').value;

    let commentData = {
        // update user/post based on info passed
        post_id: postIdUrl,
        text: commentText
    }

    console.log(commentData)

    fetch('/api/comment', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(commentData)
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((window.location.reload()))
    .catch((err) => console.error(err))
})