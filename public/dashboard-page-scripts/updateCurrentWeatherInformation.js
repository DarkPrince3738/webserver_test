const apiToken = "74771e227fd40f4eacc03c7dcd09e8ec"
async function updateCurrentWeatherInformation() {
    let city = "Berlin"
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiToken}`
    const coordinate = await fetch(url)
        .then(data => data.json())
    let lat = coordinate[0].lat
    let lon = coordinate[0].lon

    let currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=74771e227fd40f4eacc03c7dcd09e8ec`
    const currentCity = document.getElementById("current-city")
    currentCity.textContent = city
    const weatherTemperature = document.getElementById("current-city-temperature")

    const resultWeather = await fetch(currentWeather)
        .then(data => data.json())
    weatherTemperature.textContent = resultWeather.main.temp

    let weatherType = resultWeather.weather[0].main
    switch(weatherType){
        case "Clear":
            document.getElementById("weather-type").src = "/weather-pictures/day.svg";
            break;
        case "Clouds":
            document.getElementById("weather-type").src = "/weather-pictures/cloudy.svg";
            break;
        case "Rain":
            document.getElementById("weather-type").src = "/weather-pictures/rainy.svg";
            break;
        case "Snow":
            document.getElementById("weather-type").src = "/weather-pictures/snowy.svg";
            break;
        case "Thunderstorm":
            document.getElementById("weather-type").src = "/weather-pictures/thunder.svg";
            break;
    }
}

