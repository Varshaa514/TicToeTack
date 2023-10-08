document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        alert(`Sign up successful!\nUsername: ${username}\nEmail: ${email}`);
    });
});
