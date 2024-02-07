const apiToken = "74771e227fd40f4eacc03c7dcd09e8ec"
async function updateCurrentWeatherInformation() {
    const apiToken = "74771e227fd40f4eacc03c7dcd09e8ec"

    let givenCity = `/api/${sessionStorage.getItem("givenName")}/city`
    let city = await fetch(givenCity)
        .then(res => res.json())
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiToken}`
    const coordinate = await fetch(url)
        .then(data => data.json())
    let lat = coordinate[0].lat
    let lon = coordinate[0].lon

    let currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=74771e227fd40f4eacc03c7dcd09e8ec`
    const currentCity = document.getElementById("current-city")
    currentCity.textContent = city
    const weatherTemperature = document.getElementById("current-city-temperature")

    const currentCityForecast = document.getElementById("current-city-forecast")
    currentCityForecast.textContent = city

    const resultWeather = await fetch(currentWeather)
        .then(data => data.json())
    weatherTemperature.textContent = resultWeather.main.temp

    const currCountry = document.getElementById("current-country")
    currCountry.textContent = resultWeather.sys.country


    let weatherType = resultWeather.weather[0].main
    weatherType = document.getElementById("weather-type").src = `/weather-pictures/${weatherType}.svg`
}

