import React from "react";
import "./counter.css"

function Button(props) {
  return React.createElement("button", { onClick: props.handleClick }, props.name);
}

export class Counter extends React.Component {

  constructor(props) {
    super(props)
    this.state = { count: this.props.initialCount }
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }
  
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return React.createElement(
      "div",
      { className: 'counter' },
      [
        React.createElement("h3", { key: 0 }, "Counter"),
        React.createElement(Button, { key: 1, className: "increment-button", handleClick: this.handleIncrement, name: "+1" }),
        React.createElement(Button, { key: 2, className: "decrement-button", handleClick: this.handleDecrement, name: "-1" }),
        React.createElement("p", { key: 3, title: "count" }, this.state.count)
      ]
    );
  }
}

export default Counter;