import Component from "../../framework/Component";

export default class FavouriteLocations extends Component {
  constructor(host, props) {
    super(host, props);
  }


  render() {
    return  [
      {
        tag: 'div',
        classList: ["container__tools-item"],
        children: [
          {
            tag: 'div',
            classList: ["history-head"],
            content: `<h3 class="history-h3"> <i class="fa fa-star" aria-hidden="true"></i>Favorites</h3>`
          },
          {
            tag: 'div',
            classList: ["favorite-item"],
            content: `<p>Kiyv, Ukrain, Coords</p>
                      <button type="button" class="clear-button">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </button>`
          },
          {
            tag: 'div',
            classList: ["favorite-item"],
            content: `<p>Kiyv, Ukrain, Coords</p>
                      <button type="button" class="clear-button">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </button>`
          },
          {
            tag: 'div',
            classList: ["favorite-item"],
            content: `<p>Kiyv, Ukrain, Coords</p>
                      <button type="button" class="clear-button">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </button>`
          },

        ]
      }
    ];
  }
}
