import Component from "../../framework/Component";
import imageUrl from "../../../img/weather-icons/pressure.svg"
export default class Wind extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: 'div',
        classList: ["pressure"],
        content: `<img src="${imageUrl}" alt="pressure" /> Pressure: ${this.props.quantity} ${this.props.unit}`
      }
    ];
  }
}
