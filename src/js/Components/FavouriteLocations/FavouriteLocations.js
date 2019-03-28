import Component from "../../framework/Component";
import AppState from "../../Services/AppState";

export default class FavouriteLocations extends Component {
  constructor(host, props) {
    super(host, props);
    AppState.watch("FAVOURITE", this.updateMyself);
  }

  init() {
    ['updateMyself','getWeatherFromFavorite']
    .forEach(methodName => this[methodName] = this[methodName].bind(this));
  }

  getWeatherFromFavorite(e) {
    console.log(e.target);
    AppState.update('SHOWFAVOURITE', e.target.id);
  }

  updateMyself() {
    this._render();
  }

  render() {
    const favItems = JSON.parse(localStorage.getItem("favourite"));
    if(favItems) {
      return favItems.map(item => {
        return {
          tag: 'div',
          classList: ['favorite-item'],
          children: [
            {
              tag: 'p',
              classList: ['favourite-city'],
              content: item,
              attributes: [
                {
                  name: 'id',
                  value: item
                }
              ],
              eventHandlers: {
                click: this.getWeatherFromFavorite
              }

            },
            {
              tag: 'button',
              classList:['clear-button'],
              attributes: [
                {
                  name: 'type',
                  value: 'button'
                }
              ],
              children: [
                {
                  tag: 'i',
                  classList: ['fa', 'fa-trash']
                }
              ]
            }
          ]

        }
      });
    } else {
      return ''
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
