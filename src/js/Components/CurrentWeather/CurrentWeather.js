import Component from "../../framework/Component";
import {Temperature} from "../Temperature";
import {Humidity} from "../Humidity";
import {Wind} from "../Wind";
import {Pressure} from "../Pressure";

import WeatherDataService from "../../Services/WeatherDataService"
import {timeConverter} from "../../helpers/helpers"


// const forecast = WeatherDataService.getWeatherForecast();
// forecast.then(item => item.list.forEach(day => console.log(day.weather[0]['description'])));

import imgUrlClouds from "../../../img/weather-icons/animated/cloudy-day-3.svg"
import imgUrlFewClouds from "../../../img/weather-icons/animated/cloudy-day-1.svg"
import imgUrlScatteredClouds from "../../../img/weather-icons/animated/cloudy-day-2.svg"
import imgUrlBrokenClouds from "../../../img/weather-icons/animated/cloudy-day-3.svg"
import imgUrlClear from "../../../img/weather-icons/animated/day.svg"
import imgUrlLightRain from "../../../img/weather-icons/animated/rainy-1.svg"
import imgUrlModerateRain from "../../../img/weather-icons/animated/rainy-2.svg"
import imgUrlRain from "../../../img/weather-icons/animated/rainy-3.svg"
import imgUrlShowerRain from "../../../img/weather-icons/animated/rainy-7.svg"
import imgUrlSnow from "../../../img/weather-icons/animated/snowy-5.svg"
import imgUrlThunderstorm from "../../../img/weather-icons/animated/thunder.svg"

// import {getWeatherIcon} from "../../helpers/helpers"

const getWeatherIcon = wetherState => {
  if(wetherState === 'clear sky') {
    return imgUrlClear
  }
  // if(wetherState === 'few clouds') {
  //   return imgUrlClouds
  // }
  if(wetherState === 'few clouds') {
    return imgUrlFewClouds
  }
  if(wetherState === 'scattered clouds') {
    return imgUrlScatteredClouds
  }
  if(wetherState === 'broken clouds') {
    return imgUrlBrokenClouds
  }
  if(wetherState === 'light rain') {
    return imgUrlLightRain
  }
  if(wetherState === 'moderate rain') {
    return imgUrlModerateRain
  }
  if(wetherState === 'rain') {
    return imgUrlRain
  }
  if(wetherState === 'shower rain') {
    return imgUrlShowerRain
  }
  if(wetherState === 'snow') {
    return imgUrlSnow
  }
  if(wetherState === 'thunderstorm') {
    return imgUrlThunderstorm
  }
}


export default class CurrentWeather extends Component {
  constructor(host, props) {
    super(host, props);
    this.handleChange = this.handleChange.bind(this);
    this.geoData;
    this.prepareData();
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  prepareData(){
    return WeatherDataService.getWetherByGeolocation().then(data => {
      this.geoData = data;
      this._render()
    });
}

  render() {
    if(this.geoData) {
      // console.log('hoho,', 'geodata arrived!')
      // console.log(`Kiyv, UA ${this.geoData.name}`, ": var from content");
      // console.log(this.geoData, "render");
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
                          content: `${this.geoData.name}, ${this.geoData.sys.country}`
                        },
                        {
                          tag: 'button',
                          classList: ["container__inputs-buttons", "fav-button"],
                          attributes: [{ name: "type", value: "button" }],
                          children: [
                            {
                              tag: 'i',
                              classList: ["fa", "fa-star"],
                            }
                          ]
                        }
                      ]
                    },
                    {
                      tag: 'div',
                      classList: ["avg-temperature"],
                      children: [
                        {
                          tag: 'span',
                          classList: ["avg-temperature-item"],
                          content: `${Math.round(this.geoData.main.temp_min)}°`,
                          children: [
                            {
                              tag: 'i',
                              classList: ["fa", "fa-thermometer-empty"],
                            }
                          ]
                        },
                        {
                          tag: 'span',
                          classList: ["avg-temperature-item"],
                          content: `${Math.round(this.geoData.main.temp_max)}°`,
                          children: [
                            {
                              tag: 'i',
                              classList: ["fa", "fa-thermometer-full"],
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  tag: 'div',
                  classList: ["container__inner-meta"],
                  children: [
                    {
                      tag: 'div',
                      classList: ["container__inner-left", "container__inner-item"],
                      children: [
                        {
                          tag: 'div',
                          classList: ["temperature__main"],
                          children: [
                            {
                              tag: Temperature,
                              classList: ["temperature__main-big"],
                              props: {
                                temperature: `${Math.round(this.geoData.main.temp)}`,
                                unit: 'C'
                              },
                            },
                            {
                              tag: 'div',
                              classList: ["temperature__state"],
                              children: [
                                {
                                  tag: 'button',
                                  classList: ["temperature__state-button", "celsium", "active"],
                                  content: 'C°'
                                },
                                {
                                  tag: 'button',
                                  classList: ["temperature__state-button", "celsium"],
                                  content: 'F°'
                                }
                              ]
                            },
                          ]
                        },
                        {
                          tag: 'p',
                          classList: ["weather-state"],
                          content: `${this.geoData.weather[0]['description']}`
                        }
                      ]
                    },
                    {
                      tag: 'div',
                      classList: ["container__inner-center", "container__inner-item"],
                      content: `<img src="${getWeatherIcon(this.geoData.weather[0]['description'])}" alt="currentwether" />`
                    }
                  ]
                },
                {
                  tag: 'div',
                  classList: ["container__inner-bottom"],
                  children: [
                    {
                      tag: 'div',
                      classList: ["day-date"],
                      children: [
                        {
                          tag: 'p',
                          classList: ["day"],
                          content: `${timeConverter(this.geoData.dt, 'dayweek')}`
                        },
                        {
                          tag: 'i',
                          classList: ["fa", "fa-calendar-o"],
                        },
                        {
                          tag: 'span',
                          classList: ["date"],
                          content: `${timeConverter(this.geoData.dt)}`,
                        }
                      ]
                    },
                    {
                      tag: 'div',
                      classList: ["rest-parameters"],
                      children: [
                        {
                          tag: Wind,
                          props: {
                            speed: `${this.geoData.wind.speed}`,
                            unit: 'm/s'
                          }
                        },
                        {
                          tag: Humidity,
                          props: {
                            quantity: `${this.geoData.main.humidity}`
                          }
                        },
                        {
                          tag: Pressure,
                          props: {
                            quantity: `${this.geoData.main.pressure}`,
                            unit: 'hPa'
                          }
                        },

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
      return [
        ''
      ]
    }

  }
}
