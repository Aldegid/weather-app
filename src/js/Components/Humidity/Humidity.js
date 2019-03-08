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
            classList: ["fa", "fa-tint"],
          },
          {
            tag: 'span',
            classList: ["humidity-item"],
            content:'Humidity: ' + this.props.quantity + "%",
          }
        ]
      }
    ];
  }
}
