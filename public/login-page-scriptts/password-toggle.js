function togglePasswordField() {
    const passwordField = document.getElementById("password-field")
    const showPass = document.getElementById("password-toggle")
    if (passwordField.type === "password") {
        passwordField.type = "text"
        showPass.textContent = "Hide Password"
    }
    else {
        passwordField.type = "password"
        showPass.textContent = "Show Password"
    }
}