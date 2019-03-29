import Component from "../../framework/Component";
import {WeatherForecastItem} from "../WeatherForecastItem";
import AppState from "../../Services/AppState";

import WeatherDataService from "../../Services/WeatherDataService"
import { timeConverter } from "../../helpers/helpers";

import imageUrl from "../../../img/weather-icons/animated/cloudy-day-3.svg"
import imageUrl1 from "../../../img/weather-icons/animated/snowy-6.svg"
import imageUrl2 from "../../../img/weather-icons/animated/cloudy-night-2.svg"

import imgUrlClouds from "../../../img/weather-icons/animated/cloudy-day-3.svg";
import imgUrlFewClouds from "../../../img/weather-icons/animated/cloudy-day-1.svg";
import imgUrlScatteredClouds from "../../../img/weather-icons/animated/cloudy-day-2.svg";
import imgUrlBrokenClouds from "../../../img/weather-icons/animated/cloudy-day-3.svg";
import imgUrlClear from "../../../img/weather-icons/animated/day.svg";
import imgUrlLightRain from "../../../img/weather-icons/animated/rainy-1.svg";
import imgUrlModerateRain from "../../../img/weather-icons/animated/rainy-2.svg";
import imgUrlRain from "../../../img/weather-icons/animated/rainy-3.svg";
import imgUrlShowerRain from "../../../img/weather-icons/animated/rainy-7.svg";
import imgUrlSnow from "../../../img/weather-icons/animated/snowy-5.svg";
import imgUrlThunderstorm from "../../../img/weather-icons/animated/thunder.svg";
const getWeatherIcon = wetherState => {
  if (wetherState === "Clear") {

    return imgUrlClear;
  }
  if(wetherState === 'Clouds') {
    return imgUrlClouds
  }
  // if (wetherState === "few clouds") {
  //   return imgUrlFewClouds;
  // }
  // if (wetherState === "scattered clouds") {
  //   return imgUrlScatteredClouds;
  // }
  // if (wetherState === "broken clouds") {
  //   return imgUrlBrokenClouds;
  // }
  // if (wetherState === "light rain") {
  //   return imgUrlLightRain;
  // }
  // if (wetherState === "moderate rain") {
  //   return imgUrlModerateRain;
  // }
  if (wetherState === "Rain") {
    return imgUrlRain;
  }
  // if (wetherState === "shower rain") {
  //   return imgUrlShowerRain;
  // }
  if (wetherState === "Snow") {
    return imgUrlSnow;
  }
  if (wetherState === "Thunderstorm") {
    return imgUrlThunderstorm;
  }
  if (wetherState === "Drizzle") {
    return imgUrlLightRain;
  }
};





export default class WeatherForecast extends Component {
  constructor(host, props) {
    super(host, props);
    this.apiData;
    this.geoLocationData();
    AppState.watch("USERINPUT", this.updateMyself);
    AppState.watch("UNIT", this.computeUnit);
  }

  init() {
    ['updateMyself', 'computeUnit', 'geoLocationData', 'showDetailWeather']
      .forEach(methodName => this[methodName] = this[methodName].bind(this));
    this.apiData = null;
      this.state = {
        weatherType : 'forecast',
        unit : 'metric',
        city: null
    }
  }

  showDetailWeather(e) {
    console.log(e.target);
  }

  computeUnit(updatedUnit){
    console.log(updatedUnit);
    WeatherDataService.getWeatherForecast(updatedUnit.city, updatedUnit.unit).then(data => {
      this.apiData = data;
      this.updateState(updatedUnit);
    });
  }

  geoLocationData() {
    return WeatherDataService.getWetherByGeolocation(this.state.weatherType, this.state.unit).then(data => {
      this.apiData = data;
      this.state.city = this.apiData.city.name;
      this.updateState(this.apiData);
    });
  }

  updateMyself(userinput) {
    WeatherDataService.getWeatherForecast(userinput, this.state.unit).then(data => {
      console.log(data);
      this.apiData = data;
      this.state.city = this.apiData.city.name;
      this.updateState(this.apiData);
    });
  }


  render() {
    if(this.apiData){
 console.log(this.apiData);
      return [
        {
          tag: 'div',
          classList: ["container", "container-small"],
          children: [
            {
              tag: 'div',
              classList: ["container__inner-small"],
              eventHandlers: {
                click: this.showDetailWeather
              },
              children: [
                {
                  tag: WeatherForecastItem,
                  props: {
                    weekDay: `${timeConverter(this.apiData.list[7].dt, "dayweek")}`,
                    imgUrl: getWeatherIcon(this.apiData.list[7].weather[0].main),
                    temperature: `${this.apiData.list[7].main.temp}`
                  }
                },
                {
                  tag: WeatherForecastItem,
                  props: {
                    weekDay: `${timeConverter(this.apiData.list[15].dt, "dayweek")}`,
                    imgUrl: getWeatherIcon(this.apiData.list[15].weather[0].main),
                    temperature: `${this.apiData.list[15].main.temp}`
                  }
                },
                {
                  tag: WeatherForecastItem,
                  props: {
                    weekDay: `${timeConverter(this.apiData.list[23].dt, "dayweek")}`,
                    imgUrl: getWeatherIcon(this.apiData.list[23].weather[0].main),
                    temperature: `${this.apiData.list[23].main.temp}`

                  }
                },
                {
                  tag: WeatherForecastItem,
                  props: {
                    weekDay: `${timeConverter(this.apiData.list[31].dt, "dayweek")}`,
                    imgUrl: getWeatherIcon(this.apiData.list[31].weather[0].main),
                    temperature: `${this.apiData.list[31].main.temp}`
                  }
                },
                {
                  tag: WeatherForecastItem,
                  props: {
                    weekDay: `${timeConverter(this.apiData.list[39].dt, "dayweek")}`,
                    imgUrl: getWeatherIcon(this.apiData.list[39].weather[0].main),
                    temperature: `${this.apiData.list[39].main.temp}`
                  }
                },
              ]
            }
          ]

        }
      ];
    } else {
      return [""];
    }

  }
}
