const weatherType = ["🧊", "🥵", "☂️", "🧤", "🌫️", "🌪️", "🌬️", "⚡", "🌤️", "☁️", "⛈️", "☀️"]
let easter = document.getElementById("easter-egg")
function randomWeather(){
    easter.textContent = weatherType[Math.floor(Math.random()*weatherType.length)]
}

window.onload =  ()=> randomWeather()

