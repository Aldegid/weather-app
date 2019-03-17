import Component from "../../framework/Component";


function activatePlacesSearch() {
  const input  = document.getElementById(search);
  const autocomplete  = new google.maps.places.Autocomplete(input);
}

export default class Searchbar extends Component {
  constructor(host, props) {
    super(host, props);

  }

  bindEverything() {
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}) {
    return target.value;
  }

  render() {
    return  [
      {
        tag: 'div',
        classList: ['container__inputs'],
        children: [
          {
            tag: 'input',
            classList: ['container__inputs-search'],
            attributes: [
              {name: 'type', value: 'search'},
              {name: 'name', value: 'search'},
              {name: 'id', value: 'search'},
              {name: 'placeholder', value: 'Search by city name or geo location'},
            ],
            eventHandlers: {
              change: this.handleChange
            }
          },
          {
            tag: 'div',
            classList: ['search-icon'],
            children: [
              {
                tag: 'i',
                classList: ['fa', 'fa-search'],
              }
            ]
          }
        ]
      }
    ];
  }
}
