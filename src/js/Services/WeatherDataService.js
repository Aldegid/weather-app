import SearchBar from "../Components/SearchBar";

class WeatherDataService {
  constructor() {
    this.apiKey = "ffa19df254477b52e5f0e38980606a54";
    this.unit = "metric";
  }

  getWetherByGeolocation(weathertype){

    const getGeolocation = () =>
      new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );
    const getWeatherByPosition = position => {
      const { longitude } = position.coords;
      const { latitude } = position.coords;
      const api = `https://api.openweathermap.org/data/2.5/${weathertype}?lat=${latitude}&lon=${longitude}&units=${this.unit}&appid=${this.apiKey}`;
      return fetch(api).then(response =>
        response.ok ? response.json() : Promise.reject(response.statusText)
      );

    };
    return getGeolocation()
      .then(getWeatherByPosition)
      .then(result => {
        return result;
      });
  }
  getCurrentWeather(userInput) {
    //const city = 'london'
    const api = `https://api.openweathermap.org//data/2.5/weather?q=${userInput}&units=${this.unit}&appid=${this.apiKey}`
    return fetch(api).then(response =>
      response.ok ? response.json() : Promise.reject(response.statusText)
    );

  }
  getWeatherForecast(userInput) {
    //const city = 'london'
    const api = `https://api.openweathermap.org//data/2.5/forecast?q=${userInput}&units=${this.unit}&appid=${this.apiKey}`
    return fetch(api).then(response =>
      response.ok ? response.json() : Promise.reject(response.statusText)
    );
  }
}

export default new WeatherDataService();
