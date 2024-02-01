async function getUsername(){
    document.getElementById("get-name").textContent = sessionStorage.getItem("givenName")
    let imageLink = `/api/${sessionStorage.getItem("givenName")}/profile-picture-path`
    let image = await fetch(imageLink)
        .then(img => img.json())
    document.getElementById("user-image").src = image
    /*const name = document.getElementById("get-name") //getting username through cookie
    name.textContent = document.cookie
    const firstPart = name.textContent.indexOf('=')
    const lastPart  = name.textContent.indexOf('_')
    name.textContent = document.cookie.slice(firstPart+1, lastPart)*/
}

window.onload =  ()=> getUsername()