import Component from "../../framework/Component";
import {Temperature} from "../Temperature/";
import {Wind} from "../Wind";
import {Searchbar} from "../SearchBar";
import {CurrentWeather} from "../CurrentWeather";
import {WeatherForecast} from "../WeatherForecast";
import {WeatherTools} from "../WeatherTools";

export default class App extends Component {
  constructor(host) {
    super(host);
  }

  render() {
    return [
      {
        tag: Searchbar,
      },
      {
        tag: CurrentWeather,

      },
      {
        tag: WeatherForecast,
      },
      {
        tag: WeatherTools,
      }

    ];
  }
}
