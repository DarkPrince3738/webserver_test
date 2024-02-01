function getUsername(){
    document.getElementById("get-name").textContent = sessionStorage.getItem("givenName")
    /*const name = document.getElementById("get-name")
    name.textContent = document.cookie
    const firstPart = name.textContent.indexOf('=')
    const lastPart  = name.textContent.indexOf('_')
    name.textContent = document.cookie.slice(firstPart+1, lastPart)*/
}
window.onload =  ()=> getUsername()