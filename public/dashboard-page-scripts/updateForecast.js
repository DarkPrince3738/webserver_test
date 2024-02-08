async function updateForecast() {
    document.getElementById("forecast-container").style.display = "flex"
    const apiToken = "74771e227fd40f4eacc03c7dcd09e8ec"
    let givenCity = `/api/${sessionStorage.getItem("givenName")}/city`
    let city = await fetch(givenCity)
        .then(res => res.json())
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiToken}`
    const coordinate = await fetch(url)
        .then(data => data.json())
    let lat = coordinate[0].lat
    let lon = coordinate[0].lon
    let forecastDays = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${apiToken}`
    const ans = await fetch(forecastDays)
        .then(data => data.json())
    console.log(ans)
    const createNewCard = (data, index) => {
        const date = new Date(data.dt_txt);
        const forecastContainer = document.getElementById('forecast-container');
        const dayContainer = document.createElement('div');
        dayContainer.className = 'weather-container';
        dayContainer.id = `day-${index + 1}`;
        const div = document.createElement('div');
        div.className = 'card-info';
        div.innerHTML = `
        <p>${date.toLocaleDateString("de-DE", {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "numeric",
        })}</p>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="icon"/>
        <p>${data.weather[0].description}</p>
        <p>${Math.floor(data.main.temp)} C°</p>
`;
            dayContainer.appendChild(div);
            forecastContainer.appendChild(dayContainer);
    };
    const forecastData = ans.list;
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = '';forecastData.slice(0, 40).forEach((data, index) => {
        createNewCard(data, index);
    });
}