function validate(event){
    // prevent default form submission and perform validation
    event.preventDefault();
    var form = document.getElementById("signupForm");
    var username = form.username.value;
    var email = form.email.value;
    var password = form.password.value;
    var confirm_password = form.confirm_password.value;

    if (username === "") {
        alert("Please enter your username.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }

    if (password === "") {
        alert("Please enter your password.");
        return false;
    }

    if (confirm_password === "") {
        alert("Please enter your confirm password.");
        return false;
    }

    alert("Login successful!");
    window.location.href = "http://127.0.0.1:5500/sem4/webProgramming/miniProject/course.htm";
}