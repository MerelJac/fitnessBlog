const deleteBtns = document.querySelectorAll('.delete-btn');

// successful
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
        .catch ((err) => {
            console.error(err)})
    
    })
})
