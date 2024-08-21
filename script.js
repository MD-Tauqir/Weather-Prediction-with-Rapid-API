const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bd3b953930mshaad94a3f6670df8p110821jsnad2bb1e32251',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const apiKey = 'bd3b953930mshaad94a3f6670df8p110821jsnad2bb1e32251'; // Replace with your RapidAPI key
const apiHost = 'weather-by-api-ninjas.p.rapidapi.com'; // Replace with your RapidAPI host
const cities = ['Chennai', 'Kolkata', 'Bangalore', 'Hyderabad'];

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const temp2 = document.getElementById("temp2");
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const humidity2 = document.getElementById("humidity2");
const min_temp = document.getElementById("min_temp");
const max_temp = document.getElementById("max_temp");
const wind_speed = document.getElementById("wind_speed");
const wind_speed2 = document.getElementById("wind_speed2");
const wind_degrees = document.getElementById("wind_degrees");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const city = document.getElementById("city");
const submit = document.getElementById("submit");

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp; // for Bold highlight temp
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity; // for Bold highlight humidity
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_speed2.innerHTML = response.wind_speed; // for Bold highlight wind_speed
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString();
            sunset.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString();
        })
        .catch(err => console.error("Error fetching weather data:", err));
}

const fetchWeatherData = (city) => {
    const apiUrl = `https://${apiHost}/v1/weather?city=${city}`;
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }
    })
        .then(response => response.json())
        .then(data => {
            const cloudPct = data.cloud_pct;
            const feelsLike = data.feels_like;
            const humidity = data.humidity;
            const maxTemp = data.max_temp;
            const minTemp = data.min_temp;
            const sunrise = new Date(data.sunrise * 1000).toLocaleTimeString();
            const sunset = new Date(data.sunset * 1000).toLocaleTimeString();
            const temp = data.temp;
            const windDegrees = data.wind_degrees;
            const windSpeed = data.wind_speed;

            document.getElementById(`${city.toLowerCase()}-cloud`).textContent = cloudPct;
            document.getElementById(`${city.toLowerCase()}-feels-like`).textContent = feelsLike;
            document.getElementById(`${city.toLowerCase()}-humidity`).textContent = humidity;
            document.getElementById(`${city.toLowerCase()}-max-temp`).textContent = maxTemp;
            document.getElementById(`${city.toLowerCase()}-min-temp`).textContent = minTemp;
            document.getElementById(`${city.toLowerCase()}-sunrise`).textContent = sunrise;
            document.getElementById(`${city.toLowerCase()}-sunset`).textContent = sunset;
            document.getElementById(`${city.toLowerCase()}-temp`).textContent = temp;
            document.getElementById(`${city.toLowerCase()}-wind-degrees`).textContent = windDegrees;
            document.getElementById(`${city.toLowerCase()}-wind-speed`).textContent = windSpeed;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();  // This line is used to prevent page reload
    getWeather(city.value);
});

getWeather("Kolkata"); // This line sets the default city for the weather report

cities.forEach(city => fetchWeatherData(city));