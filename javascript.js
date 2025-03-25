function validate() {
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let confirmPasswordInput = document.getElementById('confirmPassword');
    let email = emailInput.value;
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;

    if (email === "") {
        alert("Username is empty");
        return false;
    } else if (password === "") {
        alert("Password is empty");
        return false;
    } else if (confirmPassword === "") {
        alert("Confirm password is empty");
        return false;
    } else if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    } else {
        if (email !== "meghanasurisetti129@gmail.com") {
            alert("Incorrect email");
            return false;
        } else if (password !== "12345678") {
            alert("Incorrect password");
            return false;
        }

        emailInput.value = "";
        passwordInput.value = "";
        confirmPasswordInput.value = "";
        return true;

    }
}