import Component from "../../framework/Component";
import {Searchbar} from "../SearchBar";
import {CurrentWeather} from "../CurrentWeather";
import {WeatherForecast} from "../WeatherForecast";
import {WeatherTools} from "../WeatherTools";
import {Counter} from "../Counter";
import {CountControls} from "../CountControls";
import { PrettyNumber } from "../PrettyNumber";

export default class App extends Component {
  constructor(host, props) {
    super(host, props);
  }

  init() {
    this.updateValue = this.updateValue.bind(this);
    this.state = {
      value: 123
    };
  }


  updateValue(newState) {
    //console.log(newState);
    this.state.value = newState;
    //this.updateState(newState);
  }



  render() {
    return [
      {
        tag: CountControls,
        props: {
          value: 8,
          updateNumber: this.updateValue
        }

      },
      {
        tag: PrettyNumber,
        props: {
          value: this.state.value,
          updateNumber: this.updateValue
        }
      },
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
