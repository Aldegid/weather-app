import Component from "../../framework/Component";
import {Temperature} from "../Temperature";
import {Humidity} from "../Humidity";
import {Wind} from "../Wind";
import {Pressure} from "../Pressure";

import WeatherDataService from "../../Services/WeatherDataService"

import imageUrl from "../../../img/weather-icons/animated/cloudy-day-3.svg"

export default class CurrentWeather extends Component {
  constructor(host, props) {
    super(host, props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
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
                        content: "Kiyv, UA"
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
                        children: [
                          {
                            tag: 'i',
                            classList: ["fa", "fa-long-arrow-down"],
                            content: '18°'
                          }
                        ]
                      },
                      {
                        tag: 'span',
                        classList: ["avg-temperature-item"],
                        children: [
                          {
                            tag: 'i',
                            classList: ["fa", "fa-long-arrow-up"],
                            content: '22°'
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
                            props: {
                              temperature: 25,
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
                        content: 'Partly cloudy'
                      }
                    ]
                  },
                  {
                    tag: 'div',
                    classList: ["container__inner-center", "container__inner-item"],
                    content: `<img src="${imageUrl}" alt="currentwether" />`
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
                        content: 'Monday'
                      },
                      {
                        tag: 'i',
                        classList: ["fa", "fa-calendar-o"],
                      },
                      {
                        tag: 'span',
                        classList: ["date"],
                        content: '01/02/2019',
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
                          speed: 3,
                          unit: 'm/s'
                        }
                      },
                      {
                        tag: Humidity,
                        props: {
                          quantity: 30
                        }
                      },
                      {
                        tag: Pressure,
                        props: {
                          quantity: 0.99,
                          unit: 'atm'
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
  }
}
