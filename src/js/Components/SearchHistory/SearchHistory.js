import Component from "../../framework/Component";

export default class Wind extends Component {
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
            content: `<h3 class="history-h3"><i class="fa fa-clock-o" aria-hidden="true"></i>History</h3>              <button type="button" class="clear-button">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>`
          },
          {
            tag: 'p',
            classList: ["history-item"],
            content: 'Kiyv, Ukraine, Coords'
          },
          {
            tag: 'p',
            classList: ["history-item"],
            content: 'Kiyv, Ukraine, Coords'
          },
          {
            tag: 'p',
            classList: ["history-item"],
            content: 'Kiyv, Ukraine, Coords'
          },
        ]
      }
    ];
  }
}
