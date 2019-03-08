import Component from "../../framework/Component";
export default class Wind extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: "div",
        classList: ["wind"],
        children: [
          {
            tag: 'i',
            classList: ["fa", "fa-location-arrow"],
          },
          {
            tag: 'span',
            classList: ["wind-item"],
            content:'Wind: ' + this.props.speed + " " + this.props.unit,
          }
        ]
      }
    ];
  }
}
