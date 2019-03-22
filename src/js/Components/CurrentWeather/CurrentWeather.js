import Component from "../../framework/Component";
import { Temperature } from "../Temperature";
import { Humidity } from "../Humidity";
import { Wind } from "../Wind";
import { Pressure } from "../Pressure";
import AppState from "../../Services/AppState";

import WeatherDataService from "../../Services/WeatherDataService";
import { timeConverter } from "../../helpers/helpers";

// const forecast = WeatherDataService.getWeatherForecast();
// forecast.then(item => item.list.forEach(day => console.log(day.weather[0]['description'])));

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

// import {getWeatherIcon} from "../../helpers/helpers"

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

export default class CurrentWeather extends Component {
  constructor(host, props) {
    super(host, props);
    //this.apiData;
    this.geoLocationData();
    AppState.watch("USERINPUT", this.updateMyself);
    AppState.watch("UNIT", this.computeUnit);
  }

  init() {
    ['updateMyself', 'geoLocationData', 'changeUnitToImperial','changeUnitToMetric', 'computeUnit']
      .forEach(methodName => this[methodName] = this[methodName].bind(this));
    this.apiData = null;
    this.state = {
      weatherType : 'weather',
      unit : 'metric',
      city: null
    }
  }

  computeUnit(updatedUnit){
    //console.log(updatedUnit);
    WeatherDataService.getCurrentWeather(updatedUnit.city, updatedUnit.unit).then(data => {
      this.apiData = data;
      //this.state.city = this.apiData.name;
      this.updateState(updatedUnit)
    });
  }

  geoLocationData() {
    WeatherDataService.getWetherByGeolocation(this.state.weatherType, this.state.unit).then(data => {
      this.apiData = data;
      this.state.city = this.apiData.name;
      this.updateState(this.apiData);
    });
  }

  updateMyself(userinput) {

    WeatherDataService.getCurrentWeather(userinput, this.state.unit).then(data => {
      this.apiData = data;
      this.state.city = this.apiData.name;
      this.updateState(this.apiData)
    });
  }

  changeUnitToImperial(){
    //this.state.unit = 'imperial';
    AppState.update('UNIT', {
      city: this.state.city,
      unit: 'imperial'
    })
  }
  changeUnitToMetric(){
    //this.state.unit = 'metric';
    AppState.update('UNIT', {
      city: this.state.city,
      unit: 'metric'
    })
  }

  render() {
    if (this.apiData) {
      //console.log('hoho,', 'geodata arrived!')
      //console.log(`Kiyv, UA ${this.geoData.name}`, ": var from content");
      //console.log(this.apiData, "render");
      if (this.apiData.dt < this.apiData.sys.sunset) {
        console.log("day");
      } else {
        console.log("night");
      }
      return [
        {
          tag: "div",
          classList: ["container"],
          children: [
            {
              tag: "div",
              classList: ["container__inner"],
              children: [
                {
                  tag: "div",
                  classList: ["container__inner-head"],
                  children: [
                    {
                      tag: "div",
                      classList: ["container__inner-location"],
                      children: [
                        {
                          tag: "h2",
                          classList: ["location-header"],
                          content: `${this.apiData.name}, ${
                            this.apiData.sys.country
                          }`
                        },
                        {
                          tag: "button",
                          classList: [
                            "container__inputs-buttons",
                            "fav-button"
                          ],
                          attributes: [{ name: "type", value: "button" }],
                          children: [
                            {
                              tag: "i",
                              classList: ["fa", "fa-star"]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      tag: "div",
                      classList: ["avg-temperature"],
                      children: [
                        {
                          tag: "span",
                          classList: ["avg-temperature-item"],
                          content: `${Math.round(this.apiData.main.temp_min)}°`,
                          children: [
                            {
                              tag: "i",
                              classList: ["fa", "fa-thermometer-empty"]
                            }
                          ]
                        },
                        {
                          tag: "span",
                          classList: ["avg-temperature-item"],
                          content: `${Math.round(this.apiData.main.temp_max)}°`,
                          children: [
                            {
                              tag: "i",
                              classList: ["fa", "fa-thermometer-full"]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  tag: "div",
                  classList: ["container__inner-meta"],
                  children: [
                    {
                      tag: "div",
                      classList: [
                        "container__inner-left",
                        "container__inner-item"
                      ],
                      children: [
                        {
                          tag: "div",
                          classList: ["temperature__main"],
                          children: [
                            {
                              tag: Temperature,
                              classList: ["temperature__main-big"],
                              props: {
                                temperature: `${Math.round(
                                  this.apiData.main.temp
                                )}`,
                                unit: "C"
                              }
                            },
                            {
                              tag: "div",
                              classList: ["temperature__state"],
                              children: [
                                {
                                  tag: "button",
                                  classList: [
                                    "temperature__state-button",
                                    "celsium",
                                    "active"
                                  ],
                                  eventHandlers: {
                                    click: this.changeUnitToMetric,
                                  },
                                  content: "C°"
                                },
                                {
                                  tag: "button",
                                  classList: [
                                    "temperature__state-button",
                                    "celsium"
                                  ],
                                  eventHandlers: {
                                    click: this.changeUnitToImperial,
                                  },
                                  content: "F°"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          tag: "p",
                          classList: ["weather-state"],
                          content: `${this.apiData.weather[0]["description"]}`
                        }
                      ]
                    },
                    {
                      tag: "div",
                      classList: [
                        "container__inner-center",
                        "container__inner-item"
                      ],
                      content: `<img src="${getWeatherIcon(
                        this.apiData.weather[0].main
                      )}" alt="currentwether" />`
                    }
                  ]
                },
                {
                  tag: "div",
                  classList: ["container__inner-bottom"],
                  children: [
                    {
                      tag: "div",
                      classList: ["day-date"],
                      children: [
                        {
                          tag: "p",
                          classList: ["day"],
                          content: `${timeConverter(
                            this.apiData.dt,
                            "dayweek"
                          )}`
                        },
                        {
                          tag: "i",
                          classList: ["fa", "fa-calendar-o"]
                        },
                        {
                          tag: "span",
                          classList: ["date"],
                          content: `${timeConverter(this.apiData.dt)}`
                        }
                      ]
                    },
                    {
                      tag: "div",
                      classList: ["rest-parameters"],
                      children: [
                        {
                          tag: Wind,
                          props: {
                            speed: `${this.apiData.wind.speed}`,
                            unit: "m/s"
                          }
                        },
                        {
                          tag: Humidity,
                          props: {
                            quantity: `${this.apiData.main.humidity}`
                          }
                        },
                        {
                          tag: Pressure,
                          props: {
                            quantity: `${this.apiData.main.pressure}`,
                            unit: "hPa"
                          }
                        }
                      ]
                    }
                  ]
                }
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
