class OpenWeatherApi {
    fetchWeatherInfoByCityName = cityName => {
        const API_KEY = '4008596624f7ac6e5928f94c77864342'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

        return fetch(url)
            .then(response => response.json());
    }
}

export default new OpenWeatherApi();