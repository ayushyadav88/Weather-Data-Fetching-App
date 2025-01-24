async function getWeather() {
    const apiKey = '34c9f8299ab11f9e299c645ed5d13ff3'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;
    const weatherDataDiv = document.getElementById('weatherData');

    if (!city) {
        weatherDataDiv.innerHTML = '<p class="error">Please enter a city name.</p>';
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found.');
        }
        const data = await response.json();

        weatherDataDiv.innerHTML = `
            <h3>Weather in ${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        weatherDataDiv.innerHTML = `<p class="error">${error.message}</p>`;
    }
}
