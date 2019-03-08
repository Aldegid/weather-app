import Component from "../../framework/Component";
import {SearchHistory} from "../SearchHistory";
import {FavouriteLocations} from "../FavouriteLocations";
export default class WeatherTools extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: "div",
        classList: ["container"],
        children: [
          {
            tag: 'div',
            classList: ["container__tools"],
            children: [
              {
                tag: SearchHistory
              },
              {
                tag: FavouriteLocations
              }
            ]
          },

        ]
      }
    ];
  }
}
