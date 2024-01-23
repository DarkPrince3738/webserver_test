const apiToken = "74771e227fd40f4eacc03c7dcd09e8ec"
async function updateCurrentWeatherInformation() {
    let city = "Berlin"
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiToken}`
    const result = await fetch(url)
        .then(data => data.json())
    let lat = result[0].lat
    let lon = result[0].lon
    let currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=74771e227fd40f4eacc03c7dcd09e8ec`
    const currentCity = document.getElementById("current-city")
    currentCity.textContent = city
    const weather = document.getElementById("current-city-temperature")

    const resultWeather = await fetch(currentWeather)
        .then(data => data.json())
    weather.textContent = resultWeather.main.temp
}

