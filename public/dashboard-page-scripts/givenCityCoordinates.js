async function givenCityCoord() {
    const apiToken = "74771e227fd40f4eacc03c7dcd09e8ec"
    let city = document.getElementById("city-weather-search").value
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiToken}`
    const coordinate = await fetch(url)
        .then(data => data.json())


    let lat = coordinate[0].lat
    let lon = coordinate[0].lon

    let currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiToken}`

    const currentCity = document.getElementById("current-city")
    const resultCity= await fetch(url)
        .then(data => data.json())
    currentCity.textContent = resultCity[0].name

    const weatherTemperature = document.getElementById("current-city-temperature")

    const resultWeather = await fetch(currentWeather)
        .then(data => data.json())
    weatherTemperature.textContent = resultWeather.main.temp

    const country = document.getElementById("current-country")
    country.textContent = resultWeather.sys.country

    let weatherType = resultWeather.weather[0].main
    weatherType = document.getElementById("weather-type").src = `/weather-pictures/${weatherType}.svg`
}

