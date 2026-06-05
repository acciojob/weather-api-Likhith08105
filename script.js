document.getElementById("getWeather").addEventListener("click", getWeather);


function getWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e467712b257e418838be97cc881a71de")
        .then(response => response.json())
        .then(data => {
            document.getElementById("weatherData").innerText =
                "Current weather in London: " + data.weather[0].main;
        });
}