
const title = document.querySelectorAll('.title')

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