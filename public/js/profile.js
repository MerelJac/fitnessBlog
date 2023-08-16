
const deleteBtns = document.querySelectorAll('.delete-btn');
const deleteBtnComment = document.querySelectorAll('.delete-btn-comment')
const title = document.querySelectorAll('.title')

// delete a post successful
deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', (event) => {

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
    
        .then(window.location.reload())
        .catch ((err) => {
            console.error(err)})
    
    })
})


deleteBtnComment.forEach((deleteBtnComment) => {
    deleteBtnComment.addEventListener('click', (event) => {

        let commentId = event.currentTarget.parentElement.parentElement.id; 
        console.log(commentId)
        fetch(`/api/comment/${commentId}`, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'},
        })
        // send route again to render homepage
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .then(window.location.reload())
        .catch ((err) => {
            console.error(err)})
    
    })
})

title.forEach((title) => {
    title.addEventListener('click', (event) => {
        let postId = event.currentTarget.parentElement.parentElement.id;
        console.log(postId)
        fetch(`/blogPost/${postId}`)
        .then((response) => response.json())
        .then(window.location.href = `/blogPost/${postId}`)
        .catch((err) => console.error(err))
    })
})