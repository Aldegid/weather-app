import Component from "../../framework/Component";

export default class Searchbar extends Component {
  constructor(host, props) {
    super(host, props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
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
            eventHandler: [
              {
                eventType: 'change',
                handlerFunc: this.handleChange,
              }
            ]
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
