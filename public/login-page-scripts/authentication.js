async function authenticateUser(event) {
    event.preventDefault()

    const username = document.querySelector("#username-input").value
    const password = document.querySelector("#password-field").value

    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',

        },
        body: "username=" + username + "&password="+password
    })

    if(response.status === 200){
        window.location.replace('/dashboard')
        const sessionToken = await response.text()
        document.cookie = `sessionToken=${sessionToken}`
    }
    else{
        document.getElementById("wrong-info").style.display = "block"

    }
}