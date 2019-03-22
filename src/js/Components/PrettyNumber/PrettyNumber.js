import Component from "../../framework/Component";
export default class Counter extends Component {
  constructor(host, props) {
    super(host, props);
    this.updateMyself();
  }



  init() {
    this.updateMyself = this.updateMyself.bind(this);
    this.state = {
      value: this.props.value
    }
  }

  updateMyself(){
    this.updateState(this.props.value)
    console.log(this.state.value);
  }


  render() {
    return [
      {
        tag: 'div',
        content: this.state.value
      }
    ];
  }
}
