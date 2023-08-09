const submitBtn = document.querySelector('input[type="submit"]');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let title = document.querySelector('#titleText').value;
    let text = document.querySelector('#textText').value;
    // session cookies is user ID FIX
    let userId = 2;

    let postBody = {
        title: title,
		text: text,
		user_created: userId
    }

    fetch('/api/blogPost', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(postBody)
    })
    .then((response) => response.json())
    .then((data) => console.log(data))


})