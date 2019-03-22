import Component from "../../framework/Component";
import {Temperature} from "../Temperature";

export default class WeatherForecastItem extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: 'div',
        classList: ["container__inner-small-item"],
        children: [
          {
            tag: 'p',
            classList: ["day-small"],
            content: this.props.weekDay
          },
          {
            tag: 'div',
            classList: ["weather-img-small"],
            content: `<img src="${this.props.imgUrl}" alt="currentwether" />`
          },
          {
            tag: Temperature,
            props: {
              temperature: Math.round(this.props.temperature),
              unit: 'C'
            }
          }
        ]
      }
    ];
  }
}
