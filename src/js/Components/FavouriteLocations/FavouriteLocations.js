import Component from "../../framework/Component";
import AppState from "../../Services/AppState";

export default class FavouriteLocations extends Component {
  constructor(host, props) {
    super(host, props);
    AppState.watch("FAVOURITE", this.updateMyself);
  }

  init() {
    ["updateMyself", "getWeatherFromFavorite", "removeFavItem"].forEach(
      methodName => (this[methodName] = this[methodName].bind(this))
    );
    this.state = {
      favorite: JSON.parse(localStorage.getItem("favourite"))
    };
  }

  getWeatherFromFavorite(e) {
    //console.log(e.target);
    AppState.update("SHOWFAVOURITE", e.target.id);
  }

  updateMyself(newState) {
    // console.log(newState, 'newState');
    this.state.favorite = newState;
    this.updateState(newState);
  }

  removeFavItem(e) {
    // console.log(this.state.favorite, 'favArray');
    let favItem = this.state.favorite.indexOf(
      e.target.parentNode.firstChild.id
    );
        this.state.favorite.splice(favItem, 1);
        // console.log(this.state.favorite, 'favArray');
        localStorage.setItem("favourite", JSON.stringify(this.state.favorite));
        AppState.update("FAVOURITE", this.state.favorite);



  }

  render() {
    const favItems = JSON.parse(localStorage.getItem("favourite"));
    if (favItems) {
      return favItems.map(item => {
        return {
          tag: "div",
          classList: ["favorite-item"],
          children: [
            {
              tag: "p",
              classList: ["favourite-city"],
              content: item,
              attributes: [
                {
                  name: "id",
                  value: item
                }
              ],
              eventHandlers: {
                click: this.getWeatherFromFavorite
              }
            },
            {
              tag: "button",
              classList: ["clear-button"],
              attributes: [
                {
                  name: "type",
                  value: "button"
                }
              ],
              eventHandlers: {
                click: this.removeFavItem
              },

              children: [
                {
                  tag: "i",
                  classList: ["fa", "fa-trash"]
                }
              ]
            }
          ]
        };
      });
    } else {
      return "";
    }

    // {
    //   tag: 'div',
    //   classList: ["favorite-item"],
    //   content: `<p>Kiyv, Ukrain, Coords</p>
    //             <button type="button" class="clear-button">
    //               <i class="fa fa-trash" aria-hidden="true"></i>
    //             </button>`
    // },
  }
}
