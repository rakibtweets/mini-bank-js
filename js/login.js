/* submit btn */

document.getElementById('submit-btn').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get user password

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // cheacking email and password
    if (userEmail == 'rakib@gmail.com' && userPassword == 'rakib') {
        console.log('valid user')
        //redirecting to another page
        window.location.href = "banking.html"
    }
    else {
        alert('Invalid User')
    }

})



