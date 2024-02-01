function logOutAuthenticateUser() {
    document.cookie = "sessionToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    window.location = "/home"
}
