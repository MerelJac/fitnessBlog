const logInBtn = document.querySelector('#submitLogIn')
const signUpBtn = document.querySelector('#submitSignUp');

logInBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;


    if (email && password) {
        const response = await fetch('/api/users/login', {
          // post request to check input
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in.');
        }
      }
});

signUpBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const emailSignUp = document.querySelector('#emailSignUp').value;
    const passwordSignUp = document.querySelector('#passwordSignUp').value;


    const newUser =  { first_name: firstName, last_name: lastName, email: emailSignUp, password: passwordSignUp
    }

    console.log(newUser)

    if ( firstName && lastName && emailSignUp && passwordSignUp) {

    const response = await fetch('/api/users', {
      // post request to check input
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
})