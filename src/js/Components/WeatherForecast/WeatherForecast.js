import Component from "../../framework/Component";
import {WeatherForecastItem} from "../WeatherForecastItem";

import WeatherDataService from "../../Services/WeatherDataService"

import imageUrl from "../../../img/weather-icons/animated/cloudy-day-3.svg"
import imageUrl1 from "../../../img/weather-icons/animated/snowy-6.svg"
import imageUrl2 from "../../../img/weather-icons/animated/cloudy-night-2.svg"

export default class WeatherForecast extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: 'div',
        classList: ["container", "container-small"],
        children: [
          {
            tag: 'div',
            classList: ["container__inner-small"],
            children: [
              {
                tag: WeatherForecastItem,
                props: {
                  weekDay: 'TUE',
                  imgUrl: imageUrl,
                  temperature: 26
                }
              },
              {
                tag: WeatherForecastItem,
                props: {
                  weekDay: 'WED',
                  imgUrl: imageUrl1,
                  temperature: 22
                }
              },
              {
                tag: WeatherForecastItem,
                props: {
                  weekDay: 'THU',
                  imgUrl: imageUrl2,
                  temperature: 19

                }
              },
              {
                tag: WeatherForecastItem,
                props: {
                  weekDay: 'FRI',
                  imgUrl: imageUrl,
                  temperature: 10
                }
              },
              {
                tag: WeatherForecastItem,
                props: {
                  weekDay: 'SAT',
                  imgUrl: imageUrl,
                  temperature: 18
                }
              },
            ]
          }
        ]

      }
    ];
  }
}
