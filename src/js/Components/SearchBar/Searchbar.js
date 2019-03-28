import Component from "../../framework/Component";
import googleAutocomplete from "../../googlePlaces"
import AppState from "../../Services/AppState";

google.maps.event.addDomListener(window, 'load', googleAutocomplete);


export default class Searchbar extends Component {
  constructor(host, props) {
    super(host, props);

  }

  init() {
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      history: localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : [],
    }
  }

  handleChange(e) {
    // e.preventDefault();
    // e.stopPropagation();
    //console.log(e.target.value);
    AppState.update('USERINPUT', e.target.value);
    if(this.state.history.includes(e.target.value)) {
      return
    } else {
      this.state.history.push(e.target.value);
    }
    localStorage.setItem('history', JSON.stringify(this.state.history));

    //return e.target.value;
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
